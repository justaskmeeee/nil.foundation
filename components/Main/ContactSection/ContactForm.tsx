import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import {
    Form,
    FloatingLabel,
    Input,
    Size,
    TextArea,
    Button,
    Variant,
    Spinner,
} from '@nilfoundation/react-components';
import { useForm, Controller } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import ContactFormData from './ContactFormData';
import styles from './ContactSection.module.scss';

/**
 * Contact Form component. Form itself, created with react-hook-form.
 *
 * @returns React component.
 */
const ContactForm = (): JSX.Element => {
    const nodeRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');
    const {
        formState: { isValid, isSubmitting, submitCount, errors, isSubmitSuccessful },
        control,
        handleSubmit,
    } = useForm<ContactFormData>({
        mode: 'onChange',
        defaultValues: {
            userName: '',
            email: '',
            message: '',
        },
    });

    const combineChangeHandlers = <T extends HTMLElement>(
        e: ChangeEvent<T>,
        ...rest: ChangeEventHandler[]
    ) => {
        rest.forEach(x => x(e));
    };

    const processForm = handleSubmit(async (data: ContactFormData) => {
        setErrorMessage('');

        await fetch(`https://formspree.io/${process.env.SITE_EMAIL}`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch(() => setErrorMessage('Error while processing form.'));
    });

    return (
        <Form>
            <Form.Group hasError={!!errors['userName']}>
                <Controller
                    name="userName"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange: onChangeControl, value } }) => (
                        <FloatingLabel
                            text="Name"
                            htmlFor="userName"
                            render={({ onChange }) => (
                                <Input
                                    id="userName"
                                    onChange={e =>
                                        combineChangeHandlers(e, onChangeControl, onChange)
                                    }
                                    size={Size.lg}
                                    value={value}
                                />
                            )}
                        />
                    )}
                />
            </Form.Group>
            <Form.Group hasError={!!errors['email']}>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: true,
                        pattern: /(^$|^.*@.*\..+$)/i,
                    }}
                    render={({ field: { onChange: onChangeControl, value } }) => (
                        <FloatingLabel
                            text="Email"
                            htmlFor="email"
                            render={({ onChange }) => (
                                <Input
                                    id="email"
                                    onChange={e =>
                                        combineChangeHandlers(e, onChangeControl, onChange)
                                    }
                                    size={Size.lg}
                                    value={value}
                                />
                            )}
                        />
                    )}
                />
            </Form.Group>
            <Form.Group hasError={!!errors['message']}>
                <Controller
                    name="message"
                    control={control}
                    render={({ field: { onChange: onChangeControl, value } }) => (
                        <FloatingLabel
                            text="Message"
                            htmlFor="message"
                            render={({ onChange }) => (
                                <TextArea
                                    id="message"
                                    onChange={e =>
                                        combineChangeHandlers(e, onChangeControl, onChange)
                                    }
                                    rows={2}
                                    value={value}
                                />
                            )}
                        />
                    )}
                />
            </Form.Group>
            <Button
                variant={Variant.success}
                size={Size.lg}
                disabled={!isValid || isSubmitting}
                onClick={processForm}
            >
                Submit
                {isSubmitting && <Spinner />}
            </Button>
            <CSSTransition
                classNames="fade"
                timeout={300}
                in={!!errorMessage}
                nodeRef={nodeRef}
                unmountOnExit
            >
                <div
                    ref={nodeRef}
                    className={styles.errorMessage}
                >
                    {errorMessage}
                </div>
            </CSSTransition>
        </Form>
    );
};

export default ContactForm;

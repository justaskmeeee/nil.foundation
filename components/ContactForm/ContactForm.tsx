import {
    Col,
    Container,
    Row,
    Form,
    FloatingLabel,
    Input,
    Size,
    Anchor,
    TextArea,
    Button,
    Variant,
} from '@nilfoundation/react-components';
import styles from './ContactForm.module.scss';

/**
 * ContactForm component.
 *
 * @returns React component.
 */
const ContactForm = (): JSX.Element => (
    <Container
        as="section"
        className={styles.contactForm}
    >
        <Row>
            <Col xs={12}>
                <h1>
                    <Anchor
                        href="#contacts"
                        iconName="fa-solid fa-hashtag"
                    >
                        Contacts
                    </Anchor>
                </h1>
            </Col>
            <Col
                xs-offset={2}
                xs={8}
            >
                <Form.Group>
                    <FloatingLabel
                        text="Name"
                        htmlFor="name"
                        render={({ onChange }) => (
                            <Input
                                id="name"
                                onChange={onChange}
                                size={Size.lg}
                            />
                        )}
                    />
                    <Form.Hint>Hint</Form.Hint>
                </Form.Group>
            </Col>
            <Col
                xs-offset={2}
                xs={8}
            >
                <Form.Group>
                    <FloatingLabel
                        text="Email adress"
                        htmlFor="email"
                        render={({ onChange }) => (
                            <Input
                                id="email"
                                onChange={onChange}
                                size={Size.lg}
                            />
                        )}
                    />
                    <Form.Hint>Hint</Form.Hint>
                </Form.Group>
            </Col>
            <Col
                xs-offset={2}
                xs={8}
            >
                <Form.Group>
                    <FloatingLabel
                        text="Message"
                        htmlFor="message"
                        render={({ onChange }) => (
                            <TextArea
                                id="message"
                                onChange={onChange}
                            />
                        )}
                    />
                    <Form.Hint>Hint</Form.Hint>
                </Form.Group>
            </Col>
            <Col
                xs={8}
                xs-offset={2}
            >
                <Button
                    block
                    variant={Variant.success}
                    size={Size.lg}
                >
                    Send
                </Button>
            </Col>
        </Row>
    </Container>
);

export default ContactForm;

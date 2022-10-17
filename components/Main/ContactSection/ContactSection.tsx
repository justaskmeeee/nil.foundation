import { Col, Container, Row, Anchor } from '@nilfoundation/react-components';
import ContactForm from './ContactForm';
import styles from './ContactSection.module.scss';

/**
 * Contact section component.
 *
 * @returns React component.
 */
const ContactSection = (): JSX.Element => (
    <Container
        as="section"
        className={styles.contactForm}
    >
        <Row>
            <Col xs={12}>
                <h1 id="contacts">
                    <Anchor
                        href="#contacts"
                        iconName="fa-solid fa-hashtag"
                    >
                        Contacts
                    </Anchor>
                </h1>
            </Col>
            <Col
                md-offset={2}
                xs={12}
                md={8}
            >
                <ContactForm />
            </Col>
        </Row>
    </Container>
);

export default ContactSection;

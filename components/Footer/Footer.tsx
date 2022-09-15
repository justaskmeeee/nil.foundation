import { Col, Container, Row, Button, Icon } from '@nilfoundation/react-components';
import Link from 'next/link';
import generalSettings from './generalSettings';
import communitySettings from './communitySettings';
import locationSettings from './locationSettings';
import styles from './Footer.module.scss';

/**
 * Footer component.
 *
 * @returns React component.
 */
const Footer = (): JSX.Element => (
    <Container className={styles.footerContainer}>
        <Row>
            <Col
                md={4}
                sm={12}
            >
                <h4>General</h4>
                {generalSettings.map(({ title, path }) => (
                    <p key={title}>
                        <Link href={path}>{title}</Link>
                    </p>
                ))}
            </Col>
            <Col
                md={4}
                sm={12}
            >
                <h4>Community</h4>
                {communitySettings.map(({ title, icon, url }) => (
                    <Button
                        key={title}
                        href={url}
                    >
                        <Icon iconName={`fa-brands fa-${icon}`} />
                    </Button>
                ))}
            </Col>
            <Col
                md={4}
                sm={12}
            >
                <h4>Loaction</h4>
                {locationSettings.map(({ title, address }) => (
                    <address key={title}>
                        <strong>{title}:</strong> {address}
                    </address>
                ))}
            </Col>
        </Row>
        <Row className={styles.copyright}>
            <Col className="text-center">
                <small>{`Copyright © =nil; Foundation ${new Date().getFullYear()}`}</small>
            </Col>
        </Row>
    </Container>
);

export default Footer;

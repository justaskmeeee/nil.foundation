import { Col, Container, Row, Button, Icon } from '@nilfoundation/react-components';
import Link from 'next/link';
import generalSettings from './generalSettings';
import communitySettings from './communitySettings';
import locationSettings from './locationSettings';
import developersSettings from './developersSettings';
import FooterLink from './FooterLink';
import socialMediaSettings from './socialMediaSettings';
import styles from './Footer.module.scss';

/**
 * Footer component.
 *
 * @returns React component.
 */
const Footer = (): JSX.Element => {
    const renderFooterLink = ({ title, path }: FooterLink) => (
        <p key={title}>
            <Link href={path}>{title}</Link>
        </p>
    );

    return (
        <Container className={styles.footerContainer}>
            <Row>
                <Col
                    md={3}
                    sm={12}
                >
                    <h4>General</h4>
                    {generalSettings.map(renderFooterLink)}
                </Col>
                <Col
                    md={3}
                    sm={12}
                >
                    <h4>Developers</h4>
                    {developersSettings.map(renderFooterLink)}
                </Col>
                <Col
                    md={3}
                    sm={12}
                >
                    <h4>Community</h4>
                    {communitySettings.map(renderFooterLink)}
                </Col>
                <Col
                    md={3}
                    sm={12}
                >
                    <h4>Location</h4>
                    {locationSettings.map(({ title, address }) => (
                        <address key={title}>
                            <strong>{title}:</strong> {address}
                        </address>
                    ))}
                </Col>
                <Col
                    className={`${styles.copyright} text-center`}
                    md={12}
                    sm={12}
                >
                    <div className={styles.socialButtons}>
                        {Object.keys(socialMediaSettings).map(key => {
                            const { icon, url } = socialMediaSettings[key];

                            return (
                                <Button
                                    key={icon}
                                    href={url}
                                >
                                    <Icon iconName={`fa-brands fa-${icon}`} />
                                </Button>
                            );
                        })}
                    </div>
                    <small>{`Copyright © =nil; Foundation ${new Date().getFullYear()}`}</small>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;

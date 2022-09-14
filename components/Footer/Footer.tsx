import { Col, Container, Row } from '@nilfoundation/react-components';

/**
 * Footer component.
 *
 * @returns React component.
 */
const Footer = (): JSX.Element => (
    <footer>
        <div className="footer-below">
            <Container>
                <Row>
                    <Col className="text-center">
                        {`Copyright © =nil; Foundation ${new Date().getFullYear()}`}
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
);

export default Footer;

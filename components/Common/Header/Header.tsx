/**
 * @file React component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Col, Container, Navbar, Row } from '@nilfoundation/react-components';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';
import styles from './Header.module.scss';

/**
 * Header component.
 *
 * @returns React component.
 */
const Header = (): JSX.Element => (
    <Navbar>
        <Container>
            <Row>
                <Col className={styles.headerContainer}>
                    <Breadcrumbs />
                    <Navigation />
                </Col>
            </Row>
        </Container>
    </Navbar>
);

export default Header;

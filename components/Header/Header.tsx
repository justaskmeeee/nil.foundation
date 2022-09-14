import { Container, Navbar } from '@nilfoundation/react-components';
import Link from 'next/link';
import Navigation from '../Navigation/Navigation';

/**
 * Header component.
 *
 * @returns React component.
 */
const Header = (): JSX.Element =>
    <Navbar>
        <Container>
            <Link href="/">
                <ol className="navbar-brand breadcrumb">
                    <li>
                        <code>=nil;</code>Foundation
                    </li>
                </ol>
            </Link>
            <Navigation />
        </Container>
    </Navbar>;

export default Header;

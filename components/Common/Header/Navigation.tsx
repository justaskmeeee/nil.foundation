import { Nav } from '@nilfoundation/react-components';
import Link from 'next/link';
import navigationSettings from './navigationSettings';
import styles from './Header.module.scss';

/**
 * Navigation component.
 *
 * @returns React component.
 */
const Navigation = (): JSX.Element => (
    <Nav className="navbar-nav">
        {navigationSettings.map(({ title, path }) => (
            <Nav.Item
                key={title}
                className={styles.navLink}
                renderLink={({ href, ...props }) => (
                    <Link href={path}>
                        <a {...props}>{title}</a>
                    </Link>
                )}
            ></Nav.Item>
        ))}
    </Nav>
);

export default Navigation;

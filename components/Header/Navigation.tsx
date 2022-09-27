import { Nav } from '@nilfoundation/react-components';
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
                href={path}
                className={styles.navLink}
            >
                {title}
            </Nav.Item>
        ))}
    </Nav>
);

export default Navigation;

import { NavList } from '@nilfoundation/react-components';
import navigationSettings from './navigationSettings';
import styles from './Header.module.scss';

/**
 * Navigation component.
 *
 * @returns React component.
 */
const Navigation = (): JSX.Element => (
    <NavList className="navbar-nav">
        {navigationSettings.map(({ title, path }) => (
            <NavList.Link
                key={title}
                href={path}
                className={styles.navLink}
            >
                {title}
            </NavList.Link>
        ))}
    </NavList>
);

export default Navigation;

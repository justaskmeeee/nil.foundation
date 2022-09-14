import { NavList } from '@nilfoundation/react-components';
import navigationSettings from './navigationSettings';

/**
 * Navigation component.
 *
 * @returns React component.
 */
const Navigation = (): JSX.Element => (
    <NavList className="navbar-right navbar-nav">
        {navigationSettings.map(({ title, path }) => (
            <NavList.Link
                key={title}
                href={path}
            >
                {title}
            </NavList.Link>
        ))}
    </NavList>
);

export default Navigation;

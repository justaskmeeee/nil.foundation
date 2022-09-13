import { NavList } from '@nilfoundation/react-components';
import navigationLinks from './navigationLinks';

/**
 * Navigation component.
 * 
 * @returns React component. 
 */
const Navigation = (): JSX.Element =>
    <NavList className="navbar-right navbar-nav">
        {
            navigationLinks.map(({title, path}) =>
                <NavList.Link
                    key={title}
                    href={path}
                >
                    {title}
                </NavList.Link>)
        }
    </NavList>;

export default Navigation;

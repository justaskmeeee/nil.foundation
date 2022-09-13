import { ReactElement } from 'react';
import { NavList } from '@nilfoundation/react-components';
import navigationLinks from './navigationLinks';

/**
 * Navigation component.
 * 
 * @returns React component. 
 */
const Navigation = (): ReactElement =>
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

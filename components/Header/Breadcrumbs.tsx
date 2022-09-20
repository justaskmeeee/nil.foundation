import { Breadcrumbs as NativeBreadcrumbs } from '@nilfoundation/react-components';

/**
 * Breadcrumbs component.
 *
 * @returns React component.
 */
const Breadcrumbs = (): JSX.Element => {
    return (
        <NativeBreadcrumbs>
            <NativeBreadcrumbs.Item href="/">
                <code>=nil; </code>Foundation
            </NativeBreadcrumbs.Item>
        </NativeBreadcrumbs>
    );
};

export default Breadcrumbs;

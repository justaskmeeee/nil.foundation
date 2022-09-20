import { Breadcrumbs as NativeBreadcrumbs } from '@nilfoundation/react-components';
import styles from './Header.module.scss';

/**
 * Breadcrumbs component.
 *
 * @returns React component.
 */
const Breadcrumbs = (): JSX.Element => {
    return (
        <NativeBreadcrumbs className={styles.headerBreadcrumb}>
            <NativeBreadcrumbs.Item href="/">
                <span>
                    <code>=nil;</code>Foundation
                </span>
            </NativeBreadcrumbs.Item>
        </NativeBreadcrumbs>
    );
};

export default Breadcrumbs;

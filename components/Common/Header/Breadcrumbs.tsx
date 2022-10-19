/**
 * @file React component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Breadcrumbs as NativeBreadcrumbs } from '@nilfoundation/react-components';
import Link from 'next/link';
import BreadcrumbsItemsFactory from './BreadcrumbsItemsFactory';
import styles from './Header.module.scss';

/**
 * Breadcrumbs component.
 *
 * @returns React component.
 */
const Breadcrumbs = (): JSX.Element => {
    return (
        <NativeBreadcrumbs className={styles.headerBreadcrumb}>
            <NativeBreadcrumbs.Item
                renderLink={() => (
                    <Link href="/">
                        <a>
                            <span>
                                <code>=nil;</code>Foundation
                            </span>
                        </a>
                    </Link>
                )}
            />
            <BreadcrumbsItemsFactory />
        </NativeBreadcrumbs>
    );
};

export default Breadcrumbs;

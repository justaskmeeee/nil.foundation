import { Breadcrumbs } from '@nilfoundation/react-components';
import { useRouter } from 'next/router';

/**
 * Breadcrumbs item factory component.
 *
 * @returns React component.
 */
const BreadcrumbsItemsFactory = (): JSX.Element => {
    const { pathname } = useRouter();
    const breadcrumbsItemsTitles = pathname.split('/');

    console.log(pathname);

    return (
        <>
            {breadcrumbsItemsTitles.map(title => (
                <Breadcrumbs.Item
                    href={'/'}
                    key={title}
                >
                    <span>{title}</span>
                </Breadcrumbs.Item>
            ))}
        </>
    );
};

export default BreadcrumbsItemsFactory;

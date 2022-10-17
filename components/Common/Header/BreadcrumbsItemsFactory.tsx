import { Breadcrumbs } from '@nilfoundation/react-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

/**
 * Breadcrumbs item factory component.
 *
 * @returns React component.
 */
const BreadcrumbsItemsFactory = (): JSX.Element => {
    const { pathname } = useRouter();
    const breadcrumbsItemsTitles = pathname.split('/').filter(x => !!x);

    return (
        <>
            {breadcrumbsItemsTitles.map(title => (
                <Breadcrumbs.Item
                    key={title}
                    renderLink={() => (
                        <Link href={`/`}>
                            <a>
                                <span>{capitalizeFirstLetter(title)}</span>
                            </a>
                        </Link>
                    )}
                ></Breadcrumbs.Item>
            ))}
        </>
    );
};

export default BreadcrumbsItemsFactory;

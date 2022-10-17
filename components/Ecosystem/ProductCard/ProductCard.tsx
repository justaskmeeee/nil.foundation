import { Panel } from '@nilfoundation/react-components';
import Link from 'next/link';
import { ProductModel } from './productsConfig';

/**
 * Contact section component.
 *
 * @param {ProductModel} props Props.
 * @returns React component.
 */
const ProductCard = ({ title, descr, image, path }: ProductModel): JSX.Element => (
    <Link href={path}>
        <a>
            <Panel>
                <Panel.Image
                    source={`/products/${image}`}
                    alt={`${title} image`}
                />
                <Panel.Content>
                    <h4>{title}</h4>
                    <p>{descr}</p>
                </Panel.Content>
            </Panel>
        </a>
    </Link>
);

export default ProductCard;

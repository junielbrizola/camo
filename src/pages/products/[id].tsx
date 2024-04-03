// pages/products/[id].tsx
import ProductDetail from '../../components/ProductDetail';
import productsData from '../../data/products.json';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from '../../types';

interface ProductPageProps {
    product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Detalhes do Produto</h1>
            <ProductDetail product={product} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = productsData.map((product) => ({
        params: { id: product.id },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = productsData.find((p: Product) => p.id === params?.id);
    return { props: { product } };
};

export default ProductPage;

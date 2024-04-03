import { Product } from '../types';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <div>
            <img src={`/images/${product.image}`} alt={product.name} className="w-full mb-4" />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg text-gray-600 mb-2">Preço: R$ {product.price}</p>
            <p className="text-lg text-gray-600 mb-2">Tamanhos Disponíveis: {product.sizes.join(', ')}</p>
            <p className="text-lg text-gray-600 mb-2">Cores Disponíveis: {product.colors.join(', ')}</p>
        </div>
    );
};

export default ProductDetail;

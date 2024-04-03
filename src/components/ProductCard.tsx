// components/ProductCard.tsx
import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border border-gray-200 rounded-md p-4">
            <Link href={`/products/${product.id}`}>
                <a>
                    <img src={`/images/${product.image}`} alt={product.name} className="w-full mb-4" />
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-lg text-gray-600">Preço: R$ {product.price.toFixed(2)}</p>
                </a>
            </Link>
        </div>
    );
};

export default ProductCard;

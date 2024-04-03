// pages/index.tsx
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import productsData from '../data/products.json';
import { Product } from '../types';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Lista de Camisetas</h1>
      <Filter />
      <ProductList products={productsData} />
    </div>
  );
};

export default Home;

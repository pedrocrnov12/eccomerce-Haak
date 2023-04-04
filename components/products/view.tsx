// components/ProductsList.tsx

import { ProductDTO } from "../../typess/types";

interface Props {
  products: ProductDTO[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>{product.price} pesos</p>
          <p>{product.quantity} unidades disponibles</p>
          <p>Marca: {product.brand.name}</p>
          <p>Categoría: {product.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

import React from 'react';
import { useRouter } from 'next/router';
const Product = () => {
    const {query} = useRouter();
  return (
    <div>
      <h3> This is ProductId for {query.productId}</h3>
    </div>
  );
}

export default Product;

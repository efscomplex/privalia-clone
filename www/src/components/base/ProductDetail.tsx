import React, { useEffect, useState } from "react";
import { getProductById } from "../../logic/productActions";
import ProductItem from "./ProductItem.module.scss";

function ProductDetail(props) {
  const [product, setProduct] = useState(props.match.params.productId);

  console.log("this is productID", props.match.params.productId);

  useEffect(() => {
    if (!product) setProduct(getProductById(props.match.params.productId));
  }, [product, props.match.params.productId]);

  return (
    <>
      {product && (
        <div>
          <img src={product.images[0]} alt={product.name}></img>
          <p className={ProductItem.text}>{product.name}</p>
        </div>
      )}
      {!product && <p>Loading...</p>}
    </>
  );
}

export default ProductDetail;

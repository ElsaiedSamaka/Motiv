import React from "react";
import { CarsLayout, RootLayout } from "shared";

const ProductDetails = () => {
  return <section className="product-details">ProductDetails</section>;
};

ProductDetails.getLayout = (page) => {
  return (
    <RootLayout>
      <CarsLayout>{page}</CarsLayout>
    </RootLayout>
  );
};
export default ProductDetails;

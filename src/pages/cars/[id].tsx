import React from "react";
import { CarsLayout, RootLayout } from "shared";

const ProductDetails = () => {
  return <div>ProductDetails</div>;
};

ProductDetails.getLayout = (page) => {
  return (
    <RootLayout>
      <CarsLayout>{page}</CarsLayout>
    </RootLayout>
  );
};
export default ProductDetails;

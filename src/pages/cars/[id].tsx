import { useGetCarsByIdQuery } from "core/services/cars.service";
import { useRouter } from "next/router";
import React from "react";
import { CarsLayout, RootLayout, Title } from "shared";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isError, isLoading, isFetching, isSuccess } =
    useGetCarsByIdQuery(id as string);
  return (
    <section className="product-details">
      <Title title={"Product Details"} />
      {id}
      {isLoading && <div>...Loading</div>}
      {isFetching && <div>...Fetching</div>}
      {isError && <div>Something went wrong</div>}
      {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </section>
  );
};

ProductDetails.getLayout = (page) => {
  return (
    <RootLayout>
      <CarsLayout>{page}</CarsLayout>
    </RootLayout>
  );
};
export default ProductDetails;

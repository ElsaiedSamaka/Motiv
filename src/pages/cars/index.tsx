import { useGetCarsQuery } from "core/services/cars.service";
import Head from "next/head";
import { CarsLayout, Grid, PlaceholderCard, RootLayout, Title } from "shared";
import { Filteration } from "views";

const Cars = () => {
  const {
    data = [],
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetCarsQuery();
  return (
    <>
      <Head>
        <title>Innovadigits | Cars</title>
        <meta
          name="description"
          content="Next.js 12 + TailwindCSS + ReduxToolKit + RTK Qurey"
        />
      </Head>
      <section className="cars space-y-5 ">
        <Title title="Booking" />
        <Filteration />
        {isLoading && (
          <div>
            <ul className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 gap-5 mt-3 mb-4 ">
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
            </ul>
          </div>
        )}
        {isError && <div>Something went wrong</div>}
        {isSuccess && <Grid data={data} />}
      </section>
    </>
  );
};
Cars.getLayout = (page) => {
  return (
    <RootLayout>
      <CarsLayout>{page}</CarsLayout>
    </RootLayout>
  );
};

export default Cars;

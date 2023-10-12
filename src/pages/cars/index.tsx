import Head from "next/head";
import { CarsLayout, Grid, RootLayout, Title } from "shared";
import { Filteration } from "views";

const Cars = () => {
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
        <Grid />
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

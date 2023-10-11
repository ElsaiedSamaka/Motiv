import Head from "next/head";
import { DashboardLayout, RootLayout } from "shared";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Innovadigits | FE Task</title>
        <meta
          name="description"
          content="Next.js 12 + TailwindCSS + ReduxToolKit + RTK Qurey"
        />
      </Head>
      <section>dashboard</section>
      </>
  );
};
Dashboard.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </RootLayout>
  );
};

export default Dashboard;

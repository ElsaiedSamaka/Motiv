import Head from "next/head";
import { DashboardLayout, RootLayout } from "shared";
import { Recommended, Statistics } from "views";
import Features from "views/Dashboard.views/Features";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Innovadigits | Dashboard</title>
        <meta
          name="description"
          content="Next.js 12 + TailwindCSS + ReduxToolKit + RTK Qurey"
        />
      </Head>
      <section className="dashboard-page">
        <Statistics />
        <Features />
        <Recommended />
      </section>
    </>
  );
};
Dashboard.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};

export default Dashboard;

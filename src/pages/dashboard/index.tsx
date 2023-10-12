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
      <section className="dashboard-page p-10">
        {/* statitics */}
        <div className="statics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#A162F7] rounded-[14px] text-white font-semibold flex flex-col justify-center items-center gap-y-4 p-5 h-40 md:h-64">
            {/* chart icon */}
            <span className="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-[#a66ff0] text-white">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </span>
            {/* chart icon */}
            {/* chart title */}
            <b>Energy</b>
            {/* chart title */}
            {/* chart canvas */}
            <div className="bg-blue-400 ">asd</div>
            {/* chart canvas */}
          </div>
          <div className="bg-white rounded-[14px] text-black font-semibold flex flex-col justify-center items-center gap-y-4 p-5 h-40 md:h-64">
            {/* chart icon */}
            <span className="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-[#a66ff0] text-white">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </span>
            {/* chart icon */}
            {/* chart title */}
            <b>Energy</b>
            {/* chart title */}
            {/* chart canvas */}
            <div className="bg-blue-400 ">asd</div>
            {/* chart canvas */}
          </div>
          <div className="bg-white rounded-[14px] text-black font-semibold flex flex-col justify-center items-center gap-y-4 p-5 h-40 md:h-64">
            {/* chart icon */}
            <span className="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-[#a66ff0] text-white">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </span>
            {/* chart icon */}
            {/* chart title */}
            <b>Energy</b>
            {/* chart title */}
            {/* chart canvas */}
            <div className="bg-blue-400 ">asd</div>
            {/* chart canvas */}
          </div>
          <div className="bg-white rounded-[14px] text-black font-semibold flex flex-col justify-center items-center gap-y-4 p-5 h-40 md:h-64">
            {/* chart icon */}
            <span className="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-[#a66ff0] text-white">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </span>
            {/* chart icon */}
            {/* chart title */}
            <b>Energy</b>
            {/* chart title */}
            {/* chart canvas */}
            <div className="bg-blue-400 ">asd</div>
            {/* chart canvas */}
          </div>
        </div>
        {/* statitics */}
        {/* features */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-10 gap-4 mb-8 h-60 font-semibold">
          <div className="bg-[#FFE0BA]  sm:col-span-full md:col-span-6 rounded-md py-3 px-6">
            left
          </div>
          <div className="col-span-4 flex flex-grow space-x-3">
            <div className="bg-[#0F2837] text-white grow rounded-md py-3 px-6">
              center
            </div>
            <div className="bg-[#6E1946] text-white grow rounded-md py-3 px-6">
              right
            </div>
          </div>
        </div>
        {/* features */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="col-span-full lg:col-span-1 bg-[#E1DFA4] rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="col-span-full lg:col-span-1 bg-[#E3ECF1] rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="col-span-full lg:col-span-1 bg-[#F4E3E5] rounded-lg border-gray-300 h-48 md:h-72" />
        </div>
      </section>
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

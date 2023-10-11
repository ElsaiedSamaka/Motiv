import Breadcrumb from "shared/Common/Breadcrumb/Breadcrumb";
import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <section className="">
      <Header />
      <section className="md:ml-64 ">{children}</section>
    </section>
  );
};

export default RootLayout;

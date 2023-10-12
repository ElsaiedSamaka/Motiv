import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <section className="root-layout">
      <Header />
      <section className="md:ml-64">{children}</section>
    </section>
  );
};

export default RootLayout;

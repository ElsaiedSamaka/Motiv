import { useRouter } from "next/router";
import Header from "shared/Common/Header/Header";
import getDirection from "core/utils/translations/getDirections";

const RootLayout = ({ children }) => {
  const { locale } = useRouter();
  return (
    <section dir={getDirection(locale)} className="root-layout">
      <Header />
      <section className="md:ml-56 lg:ml-64">{children}</section>
    </section>
  );
};

export default RootLayout;

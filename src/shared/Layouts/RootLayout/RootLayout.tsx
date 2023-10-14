import { useRouter } from "next/router";
import Header from "shared/Common/Header/Header";
import getDirection from "core/utils/translations/getDirections";

const RootLayout = ({ children }) => {
  const { locale } = useRouter();
  return (
    <section dir={getDirection(locale)} className="root-layout">
      <Header />
      <section className="ltr:md:ml-56 ltr:lg:ml-64 rtl:md:mr-56 rtl:lg:mr-64">
        {children}
      </section>
    </section>
  );
};

export default RootLayout;

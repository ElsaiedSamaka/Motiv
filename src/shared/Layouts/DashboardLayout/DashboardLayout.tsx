import { useRouter } from "next/router";
import getDirection from "core/utils/translations/getDirections";

const DashboardLayout = ({ children }) => {
  const { locale } = useRouter();

  return (
    <section
      dir={getDirection(locale)}
      className="dashboard-layout h-[91vh] overflow-auto"
    >
      <div className="h-full p-5">{children}</div>
    </section>
  );
};

export default DashboardLayout;

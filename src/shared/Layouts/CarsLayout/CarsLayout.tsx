import { useRouter } from "next/router";
import getDirection from "core/utils/translations/getDirections";
const CarsLayout = ({ children }) => {
  const { locale } = useRouter();

  return (
    <section dir={getDirection(locale)} className="cars-layout">
      <div className="h-[93vh] overflow-scroll p-5">{children}</div>
    </section>
  );
};

export default CarsLayout;

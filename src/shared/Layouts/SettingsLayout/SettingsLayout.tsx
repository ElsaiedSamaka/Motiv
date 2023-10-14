import getDirection from "core/utils/translations/getDirections";
import { useRouter } from "next/router";

const SettingsLayout = ({ children }) => {
  const { locale } = useRouter();
  return (
    <section
      dir={getDirection(locale)}
      className="settings-layout h-[91vh] overflow-auto"
    >
      <div className="h-full p-5">{children}</div>
    </section>
  );
};

export default SettingsLayout;

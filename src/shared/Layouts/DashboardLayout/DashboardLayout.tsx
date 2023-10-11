import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? "text-black font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <section className="dashboard-layout mt-5 h-full">
      <div className=" max-w-screen-2xl">
        <div className="grid pt-3 pb-10 grid-cols-10">
          <div className="col-span-10 overflow-hidden mx-8  ">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;

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
    <section className="dashboard-layout">
      <div className="p-5 bg-[#F5F5F5]">{children}</div>
    </section>
  );
};

export default DashboardLayout;

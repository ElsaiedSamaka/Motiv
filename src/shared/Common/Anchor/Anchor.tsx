import Link from "next/link";
import { usePathname } from "next/navigation";
const Anchor = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`outline-none transition-all duration-100 ease-in-out rounded-lg block text-sm ${
        active
          ? "bg-[#F3F5F8] text-black transition-all duration-100 ease-in-out  font-bold"
          : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default Anchor;

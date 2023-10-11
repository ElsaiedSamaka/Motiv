import Link from "next/link";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  return (
    <>
      <div>Signin</div>
      <button className="bg-purple-600 text-white" onClick={() => router.push("/dashboard")}>Signin</button>
    </>
  );
}

export default Signin



import Link from "next/link";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  return (
    <>
      <div>Signup</div>
      <button
        className="bg-purple-600 text-white"
        onClick={() => router.push("/dashboard")}
      >
        Signup
      </button>
    </>
  );
};

export default Signup;

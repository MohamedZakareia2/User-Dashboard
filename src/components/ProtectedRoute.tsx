import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute(Component) {
  return function Wrapper(props) {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) router.push("/login");
    }, []);

    return <Component {...props} />;
  };
}

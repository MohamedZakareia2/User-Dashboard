import { useEffect } from "react";
import { useRouter } from "next/router";
import { ComponentType, PropsWithChildren } from "react";

export default function ProtectedRoute<T extends object>(Component: ComponentType<T>) {
  const Wrapper = (props: T & PropsWithChildren<{}>) => {
    const router = useRouter();

    useEffect(() => {
      if (typeof window !== "undefined") {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) router.push("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };

  Wrapper.displayName = `ProtectedRoute(${Component.displayName || Component.name || "Component"})`;

  return Wrapper;
}

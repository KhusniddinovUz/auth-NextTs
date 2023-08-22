import React, { useEffect } from "react";
import useTypedSelector from "@/hooks/useTypedSelector";
import { useRouter } from "next/navigation";

export default function Home() {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/signup");
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>WELCOME HOME!</h1>
    </div>
  );
}

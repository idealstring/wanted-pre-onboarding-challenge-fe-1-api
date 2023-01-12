import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN_KEY } from "../api/constants";

export default function UseAuth() {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token) {
      alert("로그인 후 이용할 수 있습니다.");
      void router.push("/auth/login");
    }
  }, [router]);
}

import { useRouter } from "next/router";
import React from "react";

export default function SecondaryNavbar() {
  const router = useRouter();

  return (
    <div className="w-full py-8 flex items-center justify-center">
      <img
        onClick={() => router.push("/")}
        className="w-20 h-auto cursor-pointer"
        src="/logo.png"
        alt="logo"
      />
    </div>
  );
}

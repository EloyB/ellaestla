import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="font-poppins relative">
      <Navbar />
      {children}
    </div>
  );
}

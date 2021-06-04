import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="font-poppins relative">
      {children}
      <Footer />
    </div>
  );
}

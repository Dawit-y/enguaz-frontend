import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "60px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

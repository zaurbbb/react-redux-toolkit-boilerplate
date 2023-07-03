import React from "react";
import Header from "./Header";

const Layout = (Page) => {
  return (
    <>
      Dashboard Layout
      <Header />
      <Page />
    </>
  );
};

export default Layout;

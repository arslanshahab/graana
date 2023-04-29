import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
};

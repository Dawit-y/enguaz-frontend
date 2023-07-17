import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const TripLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default TripLayout;

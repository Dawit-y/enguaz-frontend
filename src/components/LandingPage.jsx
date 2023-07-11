import React from "react";
import bus from "../assets/bus.jpg";
import ComposedTextField from "./SearchTrip";
import { Container } from "@mui/material";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bus})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ComposedTextField />
    </div>
  );
};

export default LandingPage;

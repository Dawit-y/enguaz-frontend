import React from "react";
import bus from "../assets/bus.jpg";
import Booking from "./Booking";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
        opacity: "unset",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h2" color="white" sx={{ fontWeight: "700" }}>
          Compare and Choose the best Trip
        </Typography>
        <Link to="booking">
          <Button
            variant="contained"
            sx={{
              width: "40%",
              background: "primary",
              color: "white",
              borderRadius: "6px",
              padding: "10px",
            }}
          >
            <h2>Book your trip now</h2>
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default LandingPage;

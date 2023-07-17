import React from "react";
import { Typography, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const BookingLayout = () => {
  return (
    <Container sx={{ padding: "40px" }}>
      <Typography variant="h3" sx={{ alignSelf: "center" }}>
        Book Your Trip
      </Typography>
      <Outlet />
    </Container>
  );
};

export default BookingLayout;

import React from "react";
import { useParams } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TripDetail = () => {
  const { id } = useParams();
  const trip = {
    id: "1",
    name: "addis to bahirdar",
    departureAirport: "somewhere",
    arrivalAirport: "somewhere",
    departureDate: "nowhere",
    arrivalDate: "now",
  };

  return (
    <div>
      <Paper>
        <Typography>Selected Trip</Typography>
        <Typography>Correct id : {id}</Typography>
        <Typography>Trip name: {trip.name}</Typography>
        {/* <p>
            Airline: {trip.airline.name}
        </p> */}
        <Typography>Departure station: {trip.departureAirport}</Typography>
        <Typography>Arrival station: {trip.arrivalAirport}</Typography>
        <Typography>Departure date: {trip.departureDate}</Typography>
        <Typography>Arrival date: {trip.arrivalDate}</Typography>
      </Paper>
      <Link to="seats">
        <Button variant="contained" sx={{ margin: "20px" }}>
          Select Trip
        </Button>
      </Link>
    </div>
  );
};

export default TripDetail;

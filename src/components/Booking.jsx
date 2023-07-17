import React, { useState } from "react";
import {
  Button,
  TextField,
  Paper,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  box: {
    width: "100%",
    marginLeft: "50px",
    marginTop: "20px",
  },
  paper: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: 10,
  },
  textField: {
    marginBottom: "20px",
  },
};

const Booking = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  return (
    <Container>
      <Box style={styles.box}>
        <Paper style={styles.paper}>
          <Typography
            variant="h4"
            sx={{ alignSelf: "center", marginBottom: "10px" }}
          >
            Trip Booking
          </Typography>
          <TextField
            name="origin"
            label="Origin"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            style={styles.textField}
          />
          <TextField
            name="destination"
            label="Destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            style={styles.textField}
          />
          <TextField
            name="departureDate"
            label="Departure Date"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            style={styles.textField}
          />
          <TextField
            name="returnDate"
            label="Return Date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            style={styles.textField}
          />
          <Link to="trips/">
            <Button variant="contained" color="primary" style={styles.button}>
              Search for Trip
            </Button>
          </Link>
        </Paper>
      </Box>
    </Container>
  );
};

export default Booking;

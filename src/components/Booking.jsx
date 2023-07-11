import React, { useState } from "react";
import {
  Button,
  TextField,
  Paper,
  Grid,
  Typography,
  Select,
  FormControl,
  MenuItem,
  withStyles,
} from "@mui/material";
const styles = {
  paper: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  button: {
    margin: 10,
  },
};
const Booking = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Flight Booking</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="origin"
            label="Origin"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            style={styles.textField}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="destination"
            label="Destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            style={styles.textField}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="departureDate"
            label="Departure Date"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            style={styles.textField}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="returnDate"
            label="Return Date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            style={styles.textField}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <Select
              name="passengers"
              value={passengers}
              onChange={(event) => setPassengers(event.target.value)}
              label="Passengers"
              style={styles.formControl}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" style={styles.button}>
            Book Flight
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Booking;

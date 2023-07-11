import React, { useState } from "react";
import { makeStyles } from "@material-ui";
import { Grid, TextField, Button, Typography } from "@material-ui";
import Seat from "./Seat";
import SeatMap from "./SeatMap";

const useStyles = makeStyles(theme)({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  seatMap: {
    width: "500px",
    height: "500px",
    border: "1px solid black",
  },
  seat: {
    width: "50px",
    height: "50px",
    border: "1px solid gray",
    cursor: "pointer",
  },
  selectedSeat: {
    backgroundColor: "#499167",
  },
});

const SeatSelection = () => {
  const classes = useStyles();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatId)
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <TextField
            label="Number of seats"
            type="number"
            value={selectedSeats.length}
            onChange={(event) =>
              setSelectedSeats([...selectedSeats, event.target.value])
            }
          />
        </Grid>
        <Grid item xs={12}>
          {/* <SeatMap className={classes.seatMap}> */}
          {selectedSeats.map((seatId) => (
            <Seat
              key={seatId}
              id={seatId}
              onClick={handleSeatClick}
              className={
                selectedSeats.includes(seatId)
                  ? classes.selectedSeat
                  : undefined
              }
            />
          ))}
          {/* </SeatMap> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default SeatSelection;

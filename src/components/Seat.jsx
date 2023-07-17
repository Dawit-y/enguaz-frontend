import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  ButtonGroup,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const seatsData = [
  {
    id: "64268b127bad00665af5d919",
    seatBooked: false,
    addedToCard: false,
    col: 1,
  },
  {
    id: "64268b1243c96c3114d767c1",
    seatBooked: false,
    addedToCard: false,
    col: 2,
  },
  {
    id: "64268b12abad2643d970bf6a",
    seatBooked: false,
    addedToCard: false,
    col: 3,
  },
  {
    id: "64268b1291a20ab60d14f41d",
    seatBooked: true,
    col: 4,
  },
  {
    id: "64268b12a4bc9285653a62e2",
    seatBooked: false,
    addedToCard: false,
    col: 5,
  },
  {
    id: "64268b12909bc21eecadc2e3",
    seatBooked: true,
    col: 6,
  },
  {
    id: "64268b1224c8a10adfaed1ba",
    seatBooked: false,
    addedToCard: false,
    col: 7,
  },
  {
    id: "64268b123ef491c07b15eb82",
    seatBooked: false,
    addedToCard: false,
    col: 8,
  },
  {
    id: "64268b1248dfaf162f21a082",
    seatBooked: true,
    col: 9,
  },
  {
    id: "64268b1243c96c3114d767c1",
    seatBooked: false,
    addedToCard: false,
    col: 10,
  },
  {
    id: "64268b12abad2643d970bf6a",
    seatBooked: false,
    addedToCard: false,
    col: 11,
  },
  {
    id: "64268b1291a20ab60d14f41d",
    seatBooked: true,
    col: 12,
  },
  {
    id: "64268b12a4bc9285653a62e2",
    seatBooked: false,
    addedToCard: false,
    col: 13,
  },
  {
    id: "64268b12909bc21eecadc2e3",
    seatBooked: true,
    col: 14,
  },
  {
    id: "64268b1224c8a10adfaed1ba",
    seatBooked: false,
    addedToCard: false,
    col: 15,
  },
];
const Seat = () => {
  const [seats, setSeats] = useState(seatsData);

  const updateSet = (index) => {
    console.log("working", index);
    let value = seats[index];
    value.addedToCard = value.addedToCard ? false : true;
    setSeats((seats) => ({
      ...seats,
      [index]: value,
    }));
  };

  const FormRow = () => {
    return (
      <>
        {seatsData.map((e, index) => {
          return (
            <>
              <Grid item xs={4}>
                <ButtonGroup
                  variant="contained"
                  maxWidth="10px"
                  aria-label="outlined primary button group"
                >
                  <Button
                    size="large"
                    color={e.addedToCard ? "primary" : "secondary"}
                    disabled={e.seatBooked ? true : false}
                    onClick={() => updateSet(index)}
                    key={e.col}
                  >
                    {e.col}
                  </Button>
                </ButtonGroup>
              </Grid>
            </>
          );
        })}
      </>
    );
  };

  return (
    <Container sx={{ width: "100%", margin: "20px", padding: "20px" }}>
      <Typography variant="h5" sx={{ margin: "20px" }}>
        choose your seat
      </Typography>
      <Box sx={{ flexGrow: 1, width: 300, height: 600 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
      <Link to="payment">
        <Button variant="contained" sx={{}}>
          Select Seat
        </Button>
      </Link>
    </Container>
  );
};
export default Seat;

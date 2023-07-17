import React from "react";
import {
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import react from "../assets/react.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const flights = [
  {
    id: "1",
    name: "addis to bahirdar",
    departureAirport: "somewhere",
    arrivalAirport: "somewhere",
    departureDate: "nowhere",
    arrivalDate: "now",
  },
  {
    id: "2",
    name: "addis to bahirdar",
    departureAirport: "somewhere",
    arrivalAirport: "somewhere",
    departureDate: "nowhere",
    arrivalDate: "now",
  },
  {
    id: "3",
    name: "addis to bahirdar",
    departureAirport: "somewhere",
    arrivalAirport: "somewhere",
    departureDate: "nowhere",
    arrivalDate: "now",
  },
  {
    id: "4",
    name: "addis to bahirdar",
    departureAirport: "somewhere",
    arrivalAirport: "somewhere",
    departureDate: "nowhere",
    arrivalDate: "now",
  },
];

const ListTrips = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "30px",
            }}
          >
            {flights.map((flight) => (
              <Paper key={flight.id} sx={{ margin: "10px", padding: "15px" }}>
                <Link to={`${flight.id}/`}>
                  <List component={Link} to={flight.id.toString()}>
                    <ListItem button onClick={() => setSelectedFlight(flight)}>
                      <ListItemAvatar>
                        <Avatar>
                          <img src={react} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={flight.name} />
                    </ListItem>
                  </List>
                </Link>
              </Paper>
            ))}
          </Container>
        </Grid>
      </Container>
    </div>
  );
};

export default ListTrips;

// import React, { useState } from "react";

// const FlightsList = ({ flights }) => {
//   const [selectedFlight, setSelectedFlight] = useState(null);

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         {flights.map((flight) => (
//           <Paper key={flight.id}>
//             <List>
//               <ListItem button onClick={() => setSelectedFlight(flight)}>
//                 <ListItemAvatar>
//                   <Avatar>
//                     <img src={flight.airline.logo} />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={flight.name} />
//               </ListItem>
//             </List>
//           </Paper>
//         ))}
//       </Grid>
//       {selectedFlight && (
//         <Paper>
//           <h3>Selected Flight</h3>
//           <p>
//             Flight name: {selectedFlight.name}
//           </p>
//           <p>
//             Airline: {selectedFlight.airline.name}
//           </p>
//           <p>
//             Departure airport: {selectedFlight.departureAirport}
//           </p>
//           <p>
//             Arrival airport: {selectedFlight.arrivalAirport}
//           </p>
//           <p>
//             Departure date: {selectedFlight.departureDate}
//           </p>
//           <p>
//             Arrival date: {selectedFlight.arrivalDate}
//           </p>
//         </Paper>
//       )}
//     </Container>
//   );
// };

// export default FlightsList;

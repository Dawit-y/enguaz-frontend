import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import adama from "../assets/adama.jpg";
import hawassa from "../assets/hawassa.jpg";
import bahirdar from "../assets/bahirdar.jpg";

export default function Offers() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <Typography variant="h2" component="h1" sx={{ margin: "20px" }}>
        Our Best Offers
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ maxWidth: 345, marginRight: "15px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={hawassa}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hawassa
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, marginRight: "15px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={bahirdar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bahirdar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={adama}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Adama
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </Container>
  );
}

import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <AppBar sx={{ background: "primary" }}>
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h3" sx={{ fontWeight: "700", color: "white" }}>
              Enguaz
            </Typography>
          </NavLink>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Enguaz
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="white"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab LinkComponent={NavLink} to="booking" label="Booking" />
                <Tab LinkComponent={NavLink} to="services" label="Services" />
                <Tab LinkComponent={NavLink} to="about" label="About Us" />
                <Tab LinkComponent={NavLink} to="contact" label="Contact" />
              </Tabs>
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

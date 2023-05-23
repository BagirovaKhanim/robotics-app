import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import style from "./index.module.css";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{ background: "rgba(138, 144, 255, 0.9)" }}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp"
                  alt=""
                />
              </Typography>
              <Button color="inherit">
                <Link to="" style={{ color: "white" }}>
                  HOME
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="add-robot" style={{ color: "white" }}>
                  ADD ROBOT
                </Link>
              </Button>
              <Button color="inherit">ABOUT US</Button>
              <Button color="inherit">SERVICES</Button>
              <Button color="inherit">PRODUCTS</Button>
              <Button color="inherit">BLOG</Button>
              <Button color="inherit">CONTACT</Button>
              <Button color="inherit">DROPDOWN</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

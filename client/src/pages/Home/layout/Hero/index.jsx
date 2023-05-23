import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid } from "@mui/material";
import style from "./index.module.css";
const Hero = () => {
  return (
    <>
      <section className={style.img} style={{ padding: "15rem 0" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <div
                style={{
                  width: "500px",
                  paddingLeft: "1.5rem",
                  paddingTop: "3rem",
                }}
              >
                <h1 className={style.bannerContentHeading}>
                  Improved Production level with Robotics
                </h1>
                <p className={style.bannerContentParagraph}>
                  EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS
                </p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  VIEW DETAILS
                </Button>
              </div>
            </Grid>
            <Grid item lg={6}>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Hero;

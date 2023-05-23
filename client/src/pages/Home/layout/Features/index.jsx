import { Container, Grid } from "@mui/material";
import React from "react";
import style from "./index.module.css";
import { Card } from "antd";
const { Meta } = Card;
const Features = () => {
  return (
    <>
      <section className={style.featuresSection}>
        <Container maxWidth="lg">
          <div className={style.featuresSectionTop}>
            <h1 className={style.featuresHeading}>
              Some Features that Made us Unique
            </h1>
            <p className={style.featuresParagraph}>
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className={style.featuresSectionBottom}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    width: "300px",
                    marginBottom: "15px",
                  }}
                >
                  <h4 style={{ color: "#8a90ff", fontSize: "18px" }}>
                    Expert Technicians
                  </h4>
                  <p
                    style={{
                      marginBottom: "0px",
                      marginTop: "15px",
                      color: "#777777",
                    }}
                  >
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    marginBottom: "15px",
                    width: "300px",
                  }}
                >
                  <h4 style={{ color: "#8a90ff", fontSize: "18px" }}>
                    Professional Service
                  </h4>
                  <p
                    style={{
                      marginBottom: "0px",
                      marginTop: "15px",
                      color: "#777777",
                    }}
                  >
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    marginBottom: "15px",
                    width: "300px",
                  }}
                >
                  <h4 style={{ color: "#8a90ff", fontSize: "18px" }}>
                    Great Support
                  </h4>
                  <p
                    style={{
                      marginBottom: "0px",
                      marginTop: "15px",
                      color: "#777777",
                    }}
                  >
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    width: "300px",
                  }}
                >
                  <h4 style={{ color: "#8a90ff", fontSize: "18px" }}>
                    Technical Skills
                  </h4>
                  <p
                    style={{
                      marginBottom: "0px",
                      marginTop: "15px",
                      color: "#777777",
                    }}
                  >
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    width: "300px",
                  }}
                >
                  <h4 style={{ color: "#8a90ff", fontSize: "18px" }}>
                    Highly Recomended
                  </h4>
                  <p
                    style={{
                      marginBottom: "0px",
                      marginTop: "15px",
                      color: "#777777",
                    }}
                  >
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    width: "300px",
                  }}
                >
                  <h4 style={{ color: "#8a90ff", fontSize: "18px" }}>
                    Positive Reviews
                  </h4>
                  <p
                    style={{
                      marginBottom: "0px",
                      marginTop: "15px",
                      color: "#777777",
                    }}
                  >
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Features;

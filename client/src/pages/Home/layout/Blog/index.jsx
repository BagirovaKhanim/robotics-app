import React from "react";
import style from "./index.module.css";
import Container from "@mui/material/Container";
import { Card } from "antd";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
const Blog = () => {
  return (
    <>
      <section className={style.blogSection}>
        <Container maxWidth="lg">
          <div className={style.blogsSectionTop}>
            <h1 className={style.blogHeading}>Latest News from our Blog</h1>
            <p className={style.blogParagraph}>
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className={style.blogsSectionBottom}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    width: 500,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/robotics/img/b1.jpg"
                    />
                  }
                >
                  <div>
                    <div>
                      <Button
                        variant="outlined"
                        style={{
                          color: "rgb(188,150,255)",
                          border: "1px solid rgb(188,150,255)",
                          marginRight: "1rem",
                        }}
                      >
                        Travel
                      </Button>
                      <Button
                        variant="outlined"
                        style={{
                          color: "rgb(188,150,255)",
                          border: "1px solid rgb(188,150,255)",
                        }}
                      >
                        Life Style
                      </Button>
                    </div>
                    <h4 style={{ margin: "15px 0", fontSize: "18px" }}>
                      Portable latest Fashion for young women
                    </h4>
                    <p
                      style={{
                        margin: "8px 0",
                        fontSize: "15px",
                        color: "#777777",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <p
                      style={{
                        margin: "8px 0",
                        fontSize: "16px",
                        color: "#777777",
                      }}
                    >
                      31st January, 2018
                    </p>
                  </div>
                </Card>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    width: 500,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/robotics/img/b2.jpg"
                    />
                  }
                >
                  <div>
                    <div>
                      <Button
                        variant="outlined"
                        style={{
                          color: "rgb(188,150,255)",
                          border: "1px solid rgb(188,150,255)",
                          marginRight: "1rem",
                        }}
                      >
                        Travel
                      </Button>
                      <Button
                        variant="outlined"
                        style={{
                          color: "rgb(188,150,255)",
                          border: "1px solid rgb(188,150,255)",
                        }}
                      >
                        Life Style
                      </Button>
                    </div>
                    <h4 style={{ margin: "15px 0", fontSize: "18px" }}>
                      Portable latest Fashion for young women
                    </h4>
                    <p
                      style={{
                        margin: "8px 0",
                        fontSize: "15px",
                        color: "#777777",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <p
                      style={{
                        margin: "8px 0",
                        fontSize: "16px",
                        color: "#777777",
                      }}
                    >
                      31st January, 2018
                    </p>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;

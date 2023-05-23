import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import style from "./index.module.css";
import { useState } from "react";
import { getRobotByID } from "../../api/httprequests";
import { Link, useParams } from "react-router-dom";
import { Card } from "antd";
const RobotDetail = () => {
  const [robot, setRobot] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getRobotByID(id).then((res) => {
      setRobot(res);
    });
  }, [id]);
  return (
    <>
      <section style={{ padding: "8rem 0" }}>
        <Container maxWidth="lg">
          <h1 style={{ textAlign: "center", color: "rgb(149,155,255)" }}>
            ROBOT DETAIL
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Grid item key={robot._id} lg={3} md={6} sm={12} xs={12}>
              <Card
                hoverable
                style={{ height: "400px" }}
                cover={
                  <img
                    alt="example"
                    height="200px"
                    src={robot.imageURL}
                    style={{ overflow: "hidden" }}
                  />
                }
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <Typography>
                      <b>Name:</b>
                      {robot.name}
                    </Typography>
                    <Typography>
                      <b>Description:</b>
                      {robot.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      style={{
                        border: "1px solid rgb(188,150,255)",
                      }}
                    >
                      <Link style={{ color: "rgb(188,150,255)" }} to="/">
                        GO BACK
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default RobotDetail;

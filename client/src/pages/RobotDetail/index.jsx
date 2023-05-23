import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
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
          <Grid item  lg={3} md={6} sm={12} xs={12}>
                    <Card
                      hoverable
                      style={{ height: "400px" }}
                      cover={
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                          <img
                            alt="example"
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            src={robot.imageURL}
                          />
                        </div>
                      }
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div>
                          <Typography>
                            <b>Name:</b>
                            {robot.name}
                          </Typography>
                          <Typography>
                            <b>Description:</b>
                            {robot.description}
                          </Typography>
                          <Typography>
                            <b>Price:</b>
                            {robot.price}$
                          </Typography>
                        </div>
                      </div>
                    </Card>
                    <div style={{display:"flex" , justifyContent:"center" , marginTop:'10px'}}>
                    <Button variant="contained" style={{backgroundColor:'rgb(149,155,255)'}}>
                      <Link style={{color:"white"}} to='/'>GO BACK</Link>
                    </Button>
                    </div>
                  </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default RobotDetail;

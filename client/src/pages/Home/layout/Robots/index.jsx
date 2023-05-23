import React from "react";
import style from "./index.module.css";
import Container from "@mui/material/Container";
import { Card } from "antd";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import { DeleteRobot, getAllRobots } from "../../../../api/httprequests";
import { Link, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
const Robots = () => {
  const { id } = useParams();
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    getAllRobots().then((res) => {
      setRobots(res);
    });
  }, []);
  function handleDelete(id) {
    DeleteRobot(id)
      .then(() => {
        setRobots((robot) => robot.filter((x) => x._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSearch(e) {
    getAllRobots(e.target.value).then((res) => {
      setRobots(res);
      console.log(e.target.value);
    });
  }
  return (
    <>
      <section className={style.robotSection}>
        <Container maxWidth="lg">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              marginBottom: "12px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Authors"
              onChange={(e) => handleSearch(e)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className={style.robotsSectionTop}>
            <h1 className={style.robotHeading}>
              Featured Robotics Products to Show
            </h1>
            <p className={style.robotParagraph}>
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className={style.robotsSectionBottom}>
            <Grid container spacing={2}>
              {robots?.map((robot) => {
                return (
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
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid rgb(188,150,255)",
                              }}
                            >
                              <Link
                                style={{ color: "rgb(188,150,255)" }}
                                to={`robots/detail/${robot._id}`}
                              >
                                VIEW DETAILS
                              </Link>
                            </Button>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={(e) => handleDelete(robot._id)}
                            >
                              DELETE
                            </Button>
                            <Button variant="outlined" color="error">
                              <Link
                                style={{ color: "red" }}
                                to={`robots/edit/${id}`}
                              >
                                EDIT
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Robots;

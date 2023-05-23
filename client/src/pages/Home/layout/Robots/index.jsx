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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FilterListIcon from '@mui/icons-material/FilterList';

const Robots = () => {
  const { id } = useParams();
  const [robots, setRobots] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

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
    });
  }
  function handleSort() {
    let sortedRobots = [...robots];
    if (isSorted) {
      sortedRobots.sort((a, b) => a.price - b.price);
    } else {
      sortedRobots.sort((a, b) => b.price - a.price);
    }
    setRobots(sortedRobots);
    setIsSorted(!isSorted);
  }
  return (
    <>
      <section className={style.robotSection}>
        <Container maxWidth="lg">
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
            <Button onClick={handleSort}><FilterListIcon
              style={{ marginLeft: '1rem', fontSize: '3.5rem', color: 'rgb(195,150,255)' }}
            /></Button>

          </div>
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
                                <VisibilityIcon />
                              </Link>
                            </Button>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={(e) => handleDelete(robot._id)}
                            >
                              <DeleteIcon />
                            </Button>
                            <Button variant="outlined" color="error">
                              <Link
                                style={{ color: "red" }}
                                to={`robots/edit/${robot._id}`}
                              >
                                <EditIcon />
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

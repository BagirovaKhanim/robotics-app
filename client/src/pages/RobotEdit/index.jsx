import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import style from "./index.module.css";
import { useState } from "react";
import { editRobot } from "../../api/httprequests";
import { RobotValidation } from "../../schema/RobotValidation";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditRobot = () => {
  const [robot, setRobot] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchData() {
    const data = await getRobotByID(id);
    setRobot(data);
    formik.setValues({
      name: data.name,
      description: data.description,
      imageURL: data.imageURL,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  const handleEdit = async (values, actions) => {
    await editRobot(id, values);
    navigate("/");
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: robot.name,
      description: robot.description,
      imageURL: robot.imageURL,
    },
    onSubmit: handleEdit,
    validationSchema: RobotValidation,
  });
  return (
    <>
      <section style={{ padding: "8rem 0" }}>
        <Container maxWidth="lg">
          <h1 style={{ textAlign: "center", color: "rgb(149,155,255)" }}>
            EDIT ROBOT
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form action="" onSubmit={formik.handleSubmit}>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={style.input}
                type="text"
                name="name"
                id="outlined-basic"
                label="Enter Name..."
                variant="outlined"
              />
              {formik.errors.name && formik.touched.name && (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              )}
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className={style.input}
                type="text"
                name="description"
                id="outlined-basic"
                label="Enter Description..."
                variant="outlined"
              />
              {formik.errors.description && formik.touched.description && (
                <span style={{ color: "red" }}>
                  {formik.errors.description}
                </span>
              )}
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageURL}
                className={style.input}
                type="url"
                name="imageURL"
                id="outlined-basic"
                label="Enter Image URL..."
                variant="outlined"
              />
              {formik.errors.imageURL && formik.touched.imageURL && (
                <span style={{ color: "red" }}>{formik.errors.imageURL}</span>
              )}
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EditRobot;

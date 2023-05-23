import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import style from "./index.module.css";
import { useState } from "react";
import { postRobot } from "../../api/httprequests";
import { RobotValidation } from "../../schema/RobotValidation";
import { useNavigate } from "react-router-dom";
const AddRobot = () => {
  const [robot, setRobot] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    await postRobot(values);
    setRobot(values);
    navigate("/");
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      imageURL: "",
      price:""
    },
    onSubmit: handleSubmit,
    validationSchema: RobotValidation,
  });
  return (
    <>
      <section style={{ padding: "8rem 0" }}>
        <Container maxWidth="lg">
          <h1 style={{ textAlign: "center", color: "rgb(149,155,255)" }}>
            ADD ROBOT
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
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                className={style.input}
                type="number"
                name="price"
                id="outlined-basic"
                label="Enter Price..."
                variant="outlined"
              />
              {formik.errors.price && formik.touched.price && (
                <span style={{ color: "red" }}>{formik.errors.price}</span>
              )}
              <Button variant="contained" color="success" type="submit">
                ADD
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddRobot;

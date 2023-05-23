import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import style from "./index.module.css";
import { useState } from "react";
import { editRobot, getRobotByID } from "../../api/httprequests";
import { RobotValidation } from "../../schema/RobotValidation";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditRobot = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState({});
  const navigate = useNavigate();

  async function fetchData() {
    const data = await getRobotByID(id);
    setRobot(data);
    formik.setValues({
      name: data.name,
      description: data.description,
      imageURL: data.imageURL,
      price: data.price,
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
      name: robot.name || "",
      description: robot.description || "",
      imageURL: robot.imageURL || "",
      price: robot.price || "",
    },
    validationSchema: RobotValidation,
    onSubmit: handleEdit,
  });
  return (
    <>
      <section style={{ padding: "8rem 0" }}>
        <Container maxWidth="lg">
          <h1 style={{ textAlign: "center", color: "rgb(149,155,255)" , marginBottom:"12px"}}>
            EDIT ROBOT
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form action="" onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Enter Name...</label>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={style.input}
                type="text"
                name="name"
                id="name"
              />
              {formik.errors.name && formik.touched.name && (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              )}
              <label htmlFor="description">Enter Description...</label>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className={style.input}
                type="text"
                name="description"
                id="description"
              />
              {formik.errors.description && formik.touched.description && (
                <span style={{ color: "red" }}>
                  {formik.errors.description}
                </span>
              )}
              <label htmlFor="imageURL">Enter Image URL...</label>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageURL}
                className={style.input}
                type="url"
                name="imageURL"
                id="imageURL"
              />
              {formik.errors.imageURL && formik.touched.imageURL && (
                <span style={{ color: "red" }}>{formik.errors.imageURL}</span>
              )}
              <label htmlFor="imageURL">Enter Price...</label>
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                className={style.input}
                type="number"
                name="price"
                id="price"
              />
              {formik.errors.price && formik.touched.price && (
                <span style={{ color: "red" }}>{formik.errors.price}</span>
              )}
              <Button variant="contained" color="success" type="submit">
                EDIT
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EditRobot;

import axios from "axios";
import { BASE_URL } from "./base_url";

//Get All Robots
export const getAllRobots = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL + "/robots";
  } else {
    URL = BASE_URL + "/robots" + `?name=${name}`;
  }
  await axios.get(URL).then((response) => {
    globalData = response.data.data;
  });
  return globalData;
};

//Get Robot BY ID
export const getRobotByID = async (id) => {
  let globalData;
  await axios.get(`${BASE_URL}/robots/${id}`).then((response) => {
    globalData = response.data;
  });
  return globalData;
};

//Post Robot
export const postRobot = async (payload) => {
  await axios.post(`${BASE_URL}/robots`, payload);
};

//Delete Robot
export const DeleteRobot = async (id) => {
  await axios.delete(`${BASE_URL}/robots/${id}`);
};

//Put Robot
export const editRobot = async (payload, id) => {
  await axios.put(`${BASE_URL}/robots/${id}`, payload);
};

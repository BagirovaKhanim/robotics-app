import AddRobot from "../pages/AddRobot";
import EditRobot from "../pages/EditRobot";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import RobotDetail from "../pages/RobotDetail";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-robot",
        element: <AddRobot />,
      },
      {
        path: "robots/detail/:id",
        element: <RobotDetail />,
      },
      {
        path: "robots/edit/:id",
        element: <EditRobot/>,
      },
    ],
  },
];

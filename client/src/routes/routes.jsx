import AddRobot from "../pages/AddRobot";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import RobotDetail from "../pages/RobotDetail";
import RobotEDit from "../pages/RobotEdit";

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
        element: <RobotEDit />,
      },
    ],
  },
];

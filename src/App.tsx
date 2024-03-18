import React from "react";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/root";
import Datasets from "./routes/datasets";
import Trainings from "./routes/trainings";
import Data from "./routes/data";
import Pipelines from "./routes/pipelines";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/data",
        element: <Data></Data>,
      },
      {
        path: "/datasets",
        element: <Datasets></Datasets>,
      },
      {
        path: "/trainings",
        element: <Trainings></Trainings>,
      },
      {
        path: "/pipelines",
        element: <Pipelines></Pipelines>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

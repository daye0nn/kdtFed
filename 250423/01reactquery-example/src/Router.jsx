import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import NormalPage from "./pages/NormalPage";
import ReactQuery from "./pages/ReactQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/normal-page",
        element: <NormalPage />,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      },
    ],
  },
]);

export default router;

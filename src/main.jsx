import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Greetings from "./routes/Greetings.jsx";
import CountAndGreetings from "./routes/CountAndGreetings.jsx";
import VelocityExample from "./routes/VelocityAnimation.jsx";
import Movies from "./routes/Movies.jsx";
import CountReducer from "./routes/CountReducer.jsx";
import CountContext from "./routes/CountContext.jsx";
import BlinkyRender from "./routes/BlinkyRender.jsx";
import PrimeCalculator from "./routes/PrimeCalculator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/greetings",
    element: <Greetings />,
  },
  {
    path: "/count-and-greetings",
    element: <CountAndGreetings />,
  },
  {
    path: "/velocity-example",
    element: <VelocityExample />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/count-reducer",
    element: <CountReducer />,
  },
  {
    path: "/count-context",
    element: <CountContext />,
  },
  {
    path: "/blinky-render",
    element: <BlinkyRender />,
  },
  {
    path: "/prime-calculator",
    element: <PrimeCalculator />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Greetings from "./examples/Greetings.jsx";
import CountAndGreetings from "./examples/CountAndGreetings.jsx";
import VelocityExample from "./examples/VelocityAnimation.jsx";
import Movies from "./examples/Movies.jsx";
import CountReducer from "./examples/CountReducer.jsx";
import CountContext from "./examples/CountContext.jsx";
import BlinkyRender from "./examples/BlinkyRender.jsx";
import PrimeCalculator from "./examples/PrimeCalculator.jsx";

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

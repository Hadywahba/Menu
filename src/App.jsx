import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Favourite from "./components/Favourite/Favourite";
import { useState } from "react";
function App() {
  const [query, setquery] = useState(`pasta`);
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout setquery={setquery} query={query} />,
      children: [
        { index: true, element: <Home query={query} /> },
        { path: "Favourite", element: <Favourite /> },
        { Path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
 

    </>
  );
}

export default App;

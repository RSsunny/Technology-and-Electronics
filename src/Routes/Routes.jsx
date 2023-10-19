import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../Log/Login";
import Register from "../Log/Register";
import Profile from "../pages/Profile/Profile";
import Google from "../pages/Google/Google";
import AddProduct from "../pages/Add_product/AddProduct";
import Update from "../pages/Update/Update";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://technology-and-electronics-server-site.vercel.app/"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/google"
          ),
      },
      {
        path: "/add_product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
    ],
  },
]);

export default Routes;

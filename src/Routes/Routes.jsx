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
import Apple from "../pages/Apple/Apple";
import Samsung from "../pages/Samsung/Samsung";
import Sony from "../pages/Sony/Sony";
import GoogleProduct from "../pages/Google/GoogleProduct";
import Mycard from "../pages/MyCard/Mycard";
import AppleProduct from "../pages/Apple/AppleProduct";
import SamsungProduct from "../pages/Samsung/SamsungProduct";
import SonyProduct from "../pages/Sony/SonyProduct";
import Intel from "../pages/Intel/Intel";
import IntelProduct from "../pages/Intel/IntelProduct";
import Acer from "../pages/Acer/Acer";
import Dell from "../pages/Delll/Dell";
import Panasonic from "../pages/Panasonic/Panasonic";
import Philips from "../pages/Philips/Philips";
import PrivateProvider from "../Private/PrivateProvider";

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
        path: "/apple",
        element: <Apple></Apple>,
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/apple"
          ),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/samsung"
          ),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/sony"
          ),
      },
      {
        path: "/intel",
        element: <Intel></Intel>,
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/intel"
          ),
      },
      {
        path: "/acer",
        element: <Acer></Acer>,
      },
      {
        path: "/dell",
        element: <Dell></Dell>,
      },
      {
        path: "/panasonic",
        element: <Panasonic></Panasonic>,
      },
      {
        path: "/add_product",
        element: (
          <PrivateProvider>
            <AddProduct></AddProduct>
          </PrivateProvider>
        ),
      },
      {
        path: "/philips",
        element: <Philips></Philips>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateProvider>
            <Update></Update>
          </PrivateProvider>
        ),
      },
      {
        path: "/googleproduct/:id",
        element: (
          <PrivateProvider>
            <GoogleProduct></GoogleProduct>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/google"
          ),
      },
      {
        path: "/appleproduct/:id",
        element: (
          <PrivateProvider>
            <AppleProduct></AppleProduct>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/apple"
          ),
      },
      {
        path: "/samsungproduct/:id",
        element: (
          <PrivateProvider>
            <SamsungProduct></SamsungProduct>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/samsung"
          ),
      },
      {
        path: "/sonyproduct/:id",
        element: (
          <PrivateProvider>
            <SonyProduct></SonyProduct>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/sony"
          ),
      },
      {
        path: "/intelproduct/:id",
        element: (
          <PrivateProvider>
            <IntelProduct></IntelProduct>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/intel"
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateProvider>
            <Mycard></Mycard>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-site.vercel.app/mycart"
          ),
      },
    ],
  },
]);

export default Routes;

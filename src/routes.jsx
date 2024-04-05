import Login from "./components/Login";
import Contact from "./views/Contact";
import Home from "./views/Home";
import About from "./views/About";
import Products from "./views/Products";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Products",
    path: "/products",
    element: <Products />,
  },
];

export default routes;

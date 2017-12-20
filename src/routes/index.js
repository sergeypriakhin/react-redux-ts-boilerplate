import App from "../components/App";
import HomePage from "../pages/Home";

const routes = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/home",
    exact: false,
    component: HomePage
  }
];

export default routes;

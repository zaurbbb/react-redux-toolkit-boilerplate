import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

export const privateRoutes = [
  { path: "/dashboard", element: HomePage },
];

export const publicRoutes = [
  { path: "/login", element: LoginPage },
];

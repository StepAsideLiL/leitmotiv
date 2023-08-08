import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import CoursesPage from "../pages/courses/CoursesPage";
import SkillsPage from "../pages/skills/SkillsPage";
import FilmsPage from "../pages/films/FilmsPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import AddCoursePage from "../pages/add-course/AddCoursePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/films",
        element: <FilmsPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-course",
        element: <AddCoursePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

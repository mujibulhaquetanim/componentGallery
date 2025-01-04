import { createBrowserRouter } from "react-router-dom";
import Components from "./Layouts/NavBar";
import ErrorPage from "./Layouts/Error";

import { DragAndDrop } from "./components/drag_drop/DragAndDrop";
import ScrollingProgress from "./components/Scroll/ScrollingProgress";
import { SelectionPage } from "./components/MultipleTagSelection/SelectionPage";
import { ProfileCard } from "./components/SingleComponents/ProfileCard";
import ControlledSignUpForm from "./components/Form/ControlledSignUpForm";
import { LogInReactHookForm } from "./components/Form/LogInReactHookForm";
import { ToggleShape } from "./components/SingleComponents/ToggleShape";
import ProtectedRoutes from "./components/Private Routes/ProtectedRoutes";
import { ProgressBar } from "./components/SingleComponents/ProgressBar";
import ListSort from "./components/drag_drop/ListSort";
import RatingStars from "./components/SingleComponents/RatingStars";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import FaqSection from "./components/Accordion/FaqSection";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Components />,
    children: [
      { path: "dragAndDrop", element: <DragAndDrop /> },
      { path: "scrollingProgress", element: <ScrollingProgress /> },
      { path: "selectionPage", element: <SelectionPage /> },
      { path: "profileCard", element: <ProfileCard /> },
      { path: "signup", element: <ControlledSignUpForm /> },
      { path: "login", element: <LogInReactHookForm /> },
      { path: "drag-drop", element: <ListSort /> },
      { path: "toggleShape", element: <ToggleShape /> },
      { path: "ratingStars", element: <RatingStars /> },
      {
        path: "dashboard",
        element: <ProtectedRoutes />,
        children: [
          { path: "user/Profile", element: <ProfileCard /> },
          { path: "user/orders", element: <ScrollingProgress /> },
        ],
      },
      { path: "progressBar", element: <ProgressBar /> },
      { path: "searchfilter", element: <SearchFilter /> },
      { path: "accordion", element: <FaqSection /> },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

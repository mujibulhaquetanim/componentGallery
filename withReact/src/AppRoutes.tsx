import Components from "./Layouts/Components";
import ErrorPage from "./Layouts/Error";
import DragAndDrop from "./components/SingleComponents/DragAndDrop";
import ScrollingProgress from "./components/Scroll/ScrollingProgress";
import SelectionPage from "./components/MultipleTagSelection/SelectionPage";
import ProfileCard from "./components/SingleComponents/ProfileCard";
import ReactForm from "./components/Form/ReactForm";
import ReactHookForm from "./components/Form/ReactHookForm";
import { createBrowserRouter } from "react-router-dom";
import ToggleShape from "./components/SingleComponents/ToggleShape"
// import ProgressBar from "./components/SingleComponents/ProgressBar";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Components />,
    children: [
      { path: "dragAndDrop", element: <DragAndDrop /> },
      { path: "scrollingProgress", element: <ScrollingProgress /> },
      { path: "selectionPage", element: <SelectionPage /> },
      { path: "profileCard", element: <ProfileCard /> },
      { path: "reactForm", element: <ReactForm /> },
      { path: "reactHookForm", element: <ReactHookForm /> },
      { path: "toggleShape", element: <ToggleShape /> },
      // { path: "progressBar", element: <ProgressBar /> },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

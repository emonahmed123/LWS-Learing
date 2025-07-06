import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavoriteAction,
} from "./action/contactAction";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./Error";
import Index from "./Index";
import "./index.css";
import { getContactLoader, getContactLoaders } from "./Loaders/ContarctLodaer";
import Root from "./Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactLoader,
    action: createContactAction,
    children: [
      {
        index: true, // This is a special property that indicates this is the index route
        element: <Index />,
      },
      {
        path: "/contacts/:id",
        element: <Contact />,
        errorElement: <ErrorPage />,
        loader: getContactLoaders,
        action: updateContactFavoriteAction,
      },
      {
        path: "contacts/:id/edit",
        element: <EditContact />,
        loader: getContactLoaders,
        action: editContactAction,
      },
      {
        path: "contacts/:id/destroy",

        action: deleteContactAction,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

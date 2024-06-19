import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { Routes } from "../constants";
import { useAuthContext } from "../contexts";
//   import { useAuthContext } from "../contexts";

/**
 * RootRouter component responsible for configuring the application's routes.
 *
 * Routes are defined based on the user's authentication status, rendering public or protected routes accordingly.
 *
 * @returns A configured router provider component for the application
 */
const RootRouter = () => {
  // Retrieve user authentication status from context
  const { user } = useAuthContext();
  const isAuthenticated = !!user;

  // Create a browser router with nested routes based on authentication status
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Define public routes */}
        {/* <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}> */}
          <Route path={Routes.home} element={<Home />} />
        {/* </Route> */}

        {/* Define protected routes */}
        {/* <Route
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        ></Route> */}
      </>
    )
  );

  // Render the router provider with the configured router
  return <RouterProvider router={router} />;
};

export default RootRouter;

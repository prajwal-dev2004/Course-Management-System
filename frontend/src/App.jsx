
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./component/Layout";
import CourstList from "./pages/CourstList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddCourse from "./pages/AddCourse";
import Cart from "./pages/Cart";
import UpdateCourse from "./pages/UpdateCourse";
import CourseDetail from "./pages/CourseDetail";
import ProtectedRoute from "./routes/ProtectedRoute";
import PrivateRoute from "./routes/PrivateRoute";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <CourstList />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "addcourse",
          element: (
            <PrivateRoute>
              <AddCourse/>
            </PrivateRoute>
          )
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          )
        },
        {
          path: "/course/:id",
          element: (
            <PrivateRoute>
              <UpdateCourse />
            </PrivateRoute>
          )
        },
         {
          path: "/view-course/:id",
          element: (
            <ProtectedRoute>
              <CourseDetail/>
            </ProtectedRoute>
          )
}
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;

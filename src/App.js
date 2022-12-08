import "./App.css"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./pages/Register";
import Skills from "./pages/Skills";
import Tracker from "./components/Tracker";
import WorkSample from "./pages/WorkSample";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Tracker />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/worksample',
        element: <WorkSample />
      },
    ]
  },
]);




const App = () => {
  return <RouterProvider router={router} />
}

export default App
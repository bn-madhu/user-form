import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserFormPage from './components/UserFormPage';
import TableDetailsPage from './components/TableDetailsPage';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UserFormPage />,
      },
      {
        path: "table",
        element: <TableDetailsPage />
      }
    ]
  }
],{basename: "/user-form"});

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
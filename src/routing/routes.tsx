import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameDetailPage from "../components/GameDetailPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'games/:id', element: <GameDetailPage /> }
    ]
  },
])

export default router
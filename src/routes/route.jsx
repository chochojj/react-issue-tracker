import { createBrowserRouter, Link } from "react-router-dom";
import IssueList from "../pages/IssueList";
import IssueDetail from "../pages/IssueDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueList />,
  },
  {
    path: "/issues/:id",
    element: <IssueDetail />,
  },
]);

export default router;

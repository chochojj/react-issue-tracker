import { createBrowserRouter, Link } from "react-router-dom";
import Issue from "../pages/Issue";
import IssueDetail from "../pages/IssueDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Issue />,
  },
  {
    path: "/issues/:id",
    element: <IssueDetail />,
  },
]);

export default router;

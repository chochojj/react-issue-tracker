import { createBrowserRouter } from "react-router-dom";
import IssueList from "../pages/IssueList";
import IssueDetail from "../pages/IssueDetail";
import Notfound from "../components/common/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueList />,
  },
  {
    path: "/issues/:id",
    element: <IssueDetail />,
  },
  {
    path: "/*",
    element: <Notfound />,
  },
]);

export default router;

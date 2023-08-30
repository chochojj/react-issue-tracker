import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

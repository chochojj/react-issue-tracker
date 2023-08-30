import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import Header from "./components/Header";
import "./App.css";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import {useRoutes } from "react-router-dom";
import Routes from "./Routes";

function App() {
  let router = useRoutes(Routes)
  return router
}

export default App;

import { useRoutes } from "react-router-dom";
import PatientRouter from "./router/PatientRouter"
import AuthRouter from "./router/AuthRouter";

const App = () => {

  const routes = [...PatientRouter, ...AuthRouter];
  const routing = useRoutes(routes);

  return (
    <div>
      {routing}
    </div>
  )
}

export default App
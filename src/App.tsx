import { useRoutes } from "react-router-dom";
import PatientRouter from "./router/PatientRouter"

const App = () => {

  const routes = [...PatientRouter];
  const routing = useRoutes(routes);

  return (
    <div>
      {routing}
    </div>
  )
}

export default App
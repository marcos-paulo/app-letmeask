import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContextProvider";
import { SystemRoutes } from "./routes/index.routes";

const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <SystemRoutes />
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;

import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";

const App = () => {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
};

export default App;

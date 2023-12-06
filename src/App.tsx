import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";

// utils
import resetCss from "utils/resetCss";

import RouteList from "./RouteList";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Global styles={resetCss} />
      <RouteList />
    </BrowserRouter>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

// layouts
import Default from "layouts/Default";

// utils
import routeList from "utils/routeList";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        {routeList.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
};

export default RouteList;

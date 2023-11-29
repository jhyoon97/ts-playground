import { Routes, Route } from "react-router-dom";

// pages
import Main from "pages/Main";
import Stack from "pages/Stack";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="/stack" element={<Stack />} />
      </Route>
    </Routes>
  );
};

export default RouteList;

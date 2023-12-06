import { Routes, Route } from "react-router-dom";

// pages
import Default from "layouts/Default";
import StackBasic from "pages/StackBasic";
import StackNumberBase from "pages/StackNumberBase";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/stack-basic" element={<StackBasic />} />
        <Route path="/stack-number-base" element={<StackNumberBase />} />
      </Route>
    </Routes>
  );
};

export default RouteList;

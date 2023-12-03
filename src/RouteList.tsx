import { Routes, Route } from "react-router-dom";

// pages
import Main from "pages/Main";
import StackBasic from "pages/StackBasic";
import StackNumberBase from "pages/StackNumberBase";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/stack-basic" element={<StackBasic />} />
        <Route path="/stack-number-base" element={<StackNumberBase />} />
      </Route>
    </Routes>
  );
};

export default RouteList;

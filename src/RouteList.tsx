import { Routes, Route } from "react-router-dom";

// pages
import Default from "layouts/Default";
import StackBasic from "pages/StackBasic";
import StackNumberBase from "pages/StackNumberBase";
import QueueBasic from "pages/QueueBasic";
import PriorityQueue from "pages/PriorityQueue";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/stack-basic" element={<StackBasic />} />
        <Route path="/stack-number-base" element={<StackNumberBase />} />
        <Route path="/queue-basic" element={<QueueBasic />} />
        <Route path="/priority-queue" element={<PriorityQueue />} />
      </Route>
    </Routes>
  );
};

export default RouteList;

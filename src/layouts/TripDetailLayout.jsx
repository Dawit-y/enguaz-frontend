import React from "react";
import { Outlet } from "react-router-dom";
const TripDetailLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TripDetailLayout;

import React from "react";
import { Outlet } from "react-router-dom";

function TeamHistory() {
  return (
    <>
      <p>Team History Page</p>
      <Outlet />
    </>
  );
}

export default TeamHistory;

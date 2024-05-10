import React from "react";
import { Outlet } from "react-router-dom";

function UserDetails() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default UserDetails;

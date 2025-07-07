import EditProfile from "@/pages/account/EditProfile";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function page() {
  return (
    <>
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    </>
  );
}

export default page;

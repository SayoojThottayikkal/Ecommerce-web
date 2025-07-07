import Cancellations from "@/pages/account/Cancellations";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function page() {
  return (
    <ProtectedRoute>
      <Cancellations />
    </ProtectedRoute>
  );
}

export default page;

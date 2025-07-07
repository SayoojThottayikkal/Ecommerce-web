import Return from "@/pages/account/Return";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function page() {
  return (
    <ProtectedRoute>
      <Return />
    </ProtectedRoute>
  );
}

export default page;

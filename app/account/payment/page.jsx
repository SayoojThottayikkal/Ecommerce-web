import PaymentOption from "@/pages/account/PaymentOption";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function page() {
  return (
    <ProtectedRoute>
      <PaymentOption />
    </ProtectedRoute>
  );
}

export default page;

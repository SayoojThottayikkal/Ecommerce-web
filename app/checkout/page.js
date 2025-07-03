import CheckoutPage from "@/pages/CheckoutPage";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function Page() {
  return (
    <ProtectedRoute>
      <CheckoutPage />
    </ProtectedRoute>
  );
}

export default Page;

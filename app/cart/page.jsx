import CartPage from "@/pages/CartPage";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function page() {
  return (
    <>
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    </>
  );
}

export default page;

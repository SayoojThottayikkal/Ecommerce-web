import ProductPage from "@/pages/ProductPage";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function Page() {
  return (
    <ProtectedRoute>
      <ProductPage />
    </ProtectedRoute>
  );
}

export default Page;

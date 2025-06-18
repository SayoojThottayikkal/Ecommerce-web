import AuthProvider from "@/components/auth/AuthProvider";
import WishlistPage from "@/pages/WishlistPage";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function Page() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <WishlistPage />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default Page;

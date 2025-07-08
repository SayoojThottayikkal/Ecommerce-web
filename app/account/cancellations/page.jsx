import AuthProvider from "@/components/auth/AuthProvider";
import Cancellations from "@/pages/account/Cancellations";
import React from "react";

function page() {
  return (
    <AuthProvider>
      <Cancellations />
    </AuthProvider>
  );
}

export default page;

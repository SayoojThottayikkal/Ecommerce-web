import AuthProvider from "@/components/auth/AuthProvider";
import PaymentOption from "@/pages/account/PaymentOption";

import React from "react";

function page() {
  return (
    <AuthProvider>
      <PaymentOption />
    </AuthProvider>
  );
}

export default page;

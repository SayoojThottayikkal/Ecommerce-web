import AuthProvider from "@/components/auth/AuthProvider";
import ContactPage from "@/pages/ContactPage";
import React from "react";

function page() {
  return (
    <>
      <AuthProvider>
        <ContactPage />
      </AuthProvider>
    </>
  );
}

export default page;

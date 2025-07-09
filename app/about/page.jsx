import AuthProvider from "@/components/auth/AuthProvider";
import AboutPage from "@/pages/AboutPage";
import React from "react";

function page() {
  return (
    <AuthProvider>
      <AboutPage />
    </AuthProvider>
  );
}

export default page;

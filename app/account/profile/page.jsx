import AuthProvider from "@/components/auth/AuthProvider";
import EditProfile from "@/pages/account/EditProfile";
import React from "react";

function page() {
  return (
    <>
      <AuthProvider>
        <EditProfile />
      </AuthProvider>
    </>
  );
}

export default page;

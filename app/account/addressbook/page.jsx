import AuthProvider from "@/components/auth/AuthProvider";
import AddressBook from "@/pages/account/AddressBook";

import React from "react";

function Addres() {
  return (
    <AuthProvider>
      <AddressBook />
    </AuthProvider>
  );
}

export default Addres;

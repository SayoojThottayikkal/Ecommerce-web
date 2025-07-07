import AddressBook from "@/pages/account/AddressBook";
import ProtectedRoute from "@/redux/ProtectedRoute";
import React from "react";

function Addres() {
  return (
    <ProtectedRoute>
      <AddressBook />
    </ProtectedRoute>
  );
}

export default Addres;

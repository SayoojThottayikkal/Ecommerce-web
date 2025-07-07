import AccountSidebar from "@/components/account/AccountSidebar";
import React from "react";

function Cancellations() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <AccountSidebar />
      <div className="shadow w-full flex items-center justify-center">
        <h1 className="text-black font-bold text-6xl ">Cancellations</h1>
      </div>
    </div>
  );
}

export default Cancellations;

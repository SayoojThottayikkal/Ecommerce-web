"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/redux/slices/userSlice";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AccountSidebar from "@/components/account/AccountSidebar";
import FormInput from "@/components/account/FormInput";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { loginSuccess } from "@/redux/slices/AuthSlice";

const schema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    address: z.string().min(1, "Address is required"),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && data.confirmPassword) {
        return data.newPassword === data.confirmPassword;
      }
      return true;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (user) {
      // Reset form values when user data is available
      methods.reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      address: user?.address,
    },
  });
  console.log(methods.getValues(), "form values");

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    dispatch(
      loginSuccess({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        email: user.email,
      })
    );
    toast("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <AccountSidebar />

      <main className="flex-1 px-4 sm:px-6 md:px-10 py-6 md:py-8">
        <h2
          className="text-lg font-semibold text-red-500 mb-6"
          onClick={() => setClicked(!clicked)}
        >
          Edit Your Profile
        </h2>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-4xl shadow p-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput name="firstName" label="First Name" />
              <FormInput name="lastName" label="Last Name" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput name="email" label="Email" readOnly />
              <FormInput name="address" label="Address" />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => reset(user)}
                className="text-sm text-gray-600 hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
              >
                Save Changes
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
            </div>
          </form>
        </FormProvider>
      </main>
    </div>
  );
};

export default EditProfile;

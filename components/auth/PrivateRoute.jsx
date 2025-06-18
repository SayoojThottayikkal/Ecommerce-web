"use client";

import { useRouter, usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadAuthFromStorage } from "../../redux/slices/AuthSlice";

const PrivateRoute = (WrappedComponent) => {
  return function WithAuth(props) {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      dispatch(loadAuthFromStorage());

      const timer = setTimeout(() => {
        const localAuth = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated && localAuth !== "true") {
          router.replace(`/auth?redirect=${pathname}`);
        } else {
          setChecking(false);
        }
      }, 200);

      return () => clearTimeout(timer);
    }, [isAuthenticated]);

    if (!isAuthenticated || checking) return null;
    return <WrappedComponent {...props} />;
  };
};

export default PrivateRoute;

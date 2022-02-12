import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/auth.context";

export function PrivateRoute({ children }) {
  const { isUserLogin } = useAuth();
  return isUserLogin ? (
    children
  ) : (
    <Navigate
      state={{
        from: "/home",
      }}
      replace
      to="/login"
    />
  );
}

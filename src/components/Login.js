import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
export default function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Slava", age: 43, email: "sla@sla.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout({ name: "", age: 0, email: "" }));
        }}
      >
        Logout
      </button>
    </div>
  );
}

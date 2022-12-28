import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useSelector } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div>
      <button
        style={{ backgroundColor: themeColor }}
        onClick={() => {
          dispatch(login({ name: "Slava", age: 43, email: "sla@sla.com" }));
        }}
      >
        Login
      </button>
      <button
        style={{ backgroundColor: themeColor }}
        onClick={() => {
          dispatch(logout({ name: "", age: 0, email: "" }));
        }}
      >
        Logout
      </button>
    </div>
  );
}

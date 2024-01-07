import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
export default function Root() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  );
}
export function ProtectedRoot() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  );
}

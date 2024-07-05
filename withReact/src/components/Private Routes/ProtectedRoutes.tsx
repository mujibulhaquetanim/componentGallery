import { Outlet } from "react-router-dom";
import LogInReactHookForm from "../Form/LogInReactHookForm";

function ProtectedRoutes() {
  const isSignin = false;
  return isSignin ? <Outlet /> : <LogInReactHookForm />;
}

export default ProtectedRoutes;

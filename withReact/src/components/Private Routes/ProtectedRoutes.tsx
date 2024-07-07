import { Link, Navigate, Outlet } from "react-router-dom";
import React from "react";

const SubNavBar: React.FC = () => {
  return (
    <div>
      <div className="flex gap-3 m-1 justify-center shadow-md p-2">
        <Link className="border-2 p-2 rounded-md" to="user/profile">
          Profile
        </Link>
        <Link className="border-2 p-2 rounded-md" to="user/orders">
          Orders
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

const ProtectedRoutes: React.FC = () => {
  const isSignin: boolean = true;
  return isSignin ? <SubNavBar /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;

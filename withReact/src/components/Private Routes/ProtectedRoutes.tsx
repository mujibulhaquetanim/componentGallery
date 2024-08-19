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

        <div className="group relative border-2 p-2 rounded-md">
          <p>DropDown</p>
          <div className="group-hover:block hidden absolute top-10 -right-7 drop-shadow-sm bg-white border-2 rounded-md">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-slate-500">
              <p className="cursor-pointer text-black">Profile</p>
              <p className="cursor-pointer text-black">Settings</p>
              <p className="cursor-pointer text-black">LogOut</p>
            </div>
          </div>
        </div>
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

import { Link, Navigate, Outlet } from "react-router-dom";
import React from "react";

const SubNavBar: React.FC = () => {
  return (
    <div>
      <div className="flex gap-3 m-1 justify-evenly shadow-md p-2">
        <Link className="border-2 p-2 rounded-md" to="user/profile">
          Profile
        </Link>
        <Link className="border-2 p-2 rounded-md" to="user/orders">
          Orders
        </Link>

        <div className="group relative border-2 p-2 rounded-md hidden sm:block">
          <p>DropDown</p>
          <div className="group-hover:block hidden absolute top-10 -right-7 drop-shadow-xs bg-white border-2 rounded-md">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-slate-500">
              <p className="cursor-pointer text-black">Profile</p>
              <p className="cursor-pointer text-black">Settings</p>
              <p className="cursor-pointer text-black">LogOut</p>
            </div>
          </div>
        </div>

        <div className="border-2 p-2 rounded-md group relative cursor-pointer hidden sm:block">
          <p className="rotate-90 text-xl m-auto">⫴</p>
          <div className="cursor-pointer absolute bottom-10 -right-16 rounded-xl border-2 group-hover:block hidden">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-slate-500">
              <p className="text-black">
                resize the window to see hamburger menu
              </p>
            </div>
          </div>
        </div>

        <div className="group relative cursor-pointer sm:hidden ml-3 ">
          <p className="rotate-90 text-5xl">⫴</p>
          <div className="group-hover:block hidden absolute top-10 -right-7 drop-shadow-xs bg-white border-2 rounded-md">
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

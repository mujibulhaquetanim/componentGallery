import React from "react";
import { NavLink, Outlet } from "react-router";
const AppNav: React.FC = function () {
  return (
    <div className="h-screen">
      <nav className="flex gap-3 justify-evenly shadow-md p-2 border bg-slate-300 w-full mb-4">
        <NavLink
          className="border-2 p-2 rounded-md  hover:bg-slate-400"
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/gsap"
          end
        >
          Gsap
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/swiper"
          end
        >
          Swiper
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/aos"
          end
        >
          AOS
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/framer-motion"
          end
        >
          Framer Motion
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/toastify"
          end
        >
          Toastify
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/next-ui"
          end
        >
          Next UI
        </NavLink>
        <NavLink
          className="border-2 p-2 rounded-md hover:bg-slate-400"
          to="/sinusoidal-graph"
          end
        >
          Sinusoidal Graph
        </NavLink>
      </nav>
      <h1 className="text-2xl font-bold mt-4">Welcome to Third-Party UIs</h1>
      <p className="mb-4">
        Click on the navigation items to view different components.
      </p>
      <Outlet />
    </div>
  );
};

export default AppNav;

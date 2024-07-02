import { Outlet, Link } from "react-router-dom";

function Components() {
  return (
    <div className="h-screen">
      <div className="p-2 grid grid-flow-col place-items-center">
        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/reactForm">React Form</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/scrollingProgress">Scrolling Progress</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/selectionPage">Multiple Tag Selection</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/profileCard">Profile Card</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/reactHookForm">React Hook Form</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/dragAndDrop">Drag and Drop</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Components;

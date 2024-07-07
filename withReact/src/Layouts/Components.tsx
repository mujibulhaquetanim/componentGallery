import { Outlet, Link } from "react-router-dom";

function Components() {
  return (
    <div>
      <nav className="p-2 flex justify-center items-center gap-2 flex-wrap sticky top-0 shadow-md">
        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/signup">SignUp-Dynamic</Link>
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
          <Link to="/login">LogIn-React Hook Form</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/toggleShape">Toggle Shape</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/dragAndDrop">Drag and Drop</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/progressBar">Progress Bar</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Components;

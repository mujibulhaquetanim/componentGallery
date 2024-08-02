import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify: React.FC = function () {
  const buttonHandler = () => {
    toast("Wow so easy!");
  };
  return (
    <>
      <h1>Toastify Notification</h1>
      <button className="p-2 border-2 rounded-xl m-4" onClick={buttonHandler}>
        Click
      </button>

      <ToastContainer />
    </>
  );
};

export default Toastify;

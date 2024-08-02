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

      <button
        className="p-2 border-2 rounded-xl m-4"
        onClick={() =>
          toast.success("🦄 Wow so easy!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: Bounce,
          })
        }
      >
        Success
      </button>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition: Bounce,
      />
    </>
  );
};

export default Toastify;

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PortalModal = ({ setIsOpen }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  });
  return createPortal(
    <div
      className="flex flex-col top-0 left-0 right-0 bottom-0 fixed bg-[rgba(0,0,0,0.5)]"
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-4 border-2 p-5 top-[50%] left-[50%] fixed translate-x-[-50%] translate-y-[-50%] bg-slate-100 rounded-md drop-shadow-md">
        <h1 className="text-2xl font-bold flex justify-center">Modal Sample</h1>
        <p>To see the modal, click the button below</p>
        <p>
          To close the modal, click the button in the modal or in the background
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="flex justify-center gap-3 text-white font-bold p-2 border-2 bg-red-500"
        >
          <span className="font-bold bg-white">❌</span> Close Modal
        </button>
      </div>
    </div>,
    document.querySelector(".dialogPortal")!
  );
};
export default PortalModal;

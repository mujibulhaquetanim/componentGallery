import React, { useEffect } from "react";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoPortalModal: React.FC<Props> = ({ setIsOpen }) => {
  useEffect(() => {
    // Prevent scrolling when the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scrolling when the modal is closed
      document.body.style.overflow = "unset";
    };
  });

  return (
    <div>
      {/*
        - Overlaying the whole screen with a semi-transparent black background
        - `fixed` position the overlay on top of the page, regardless of scrolling
       */}
      <div
        className="flex flex-col top-0 left-0 right-0 bottom-0 fixed bg-[rgba(0,0,0,0.5)]"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* 
        Centering the modal: 
        - `top: 50%` and `left: 50%` position the modal's top-left corner in the middle of the screen.
        - `translate-x-[-50%]` and `translate-y-[-50%]` shift it back by half its width and height,
          ensuring that the modal's center aligns with the center of the viewport.
      */}
      <div className="flex flex-col gap-4 border-2 p-5 top-[50%] left-[50%] fixed translate-x-[-50%] translate-y-[-50%] bg-slate-100 rounded-md drop-shadow-md">
        <h1 className="text-2xl font-bold flex justify-center">Modal Sample</h1>
        <p>To see the modal, click the button below</p>
        <p>
          To close the modal, click the button in the modal or in the background
        </p>

        {/* Close button with an icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="flex justify-center items-center self-center rounded-md gap-3 w-1/3 text-white font-bold p-2 border-2 bg-red-500"
        >
          <span className="font-bold bg-white">❌</span> Close Modal
        </button>
      </div>
    </div>
  );
};

export default NoPortalModal;

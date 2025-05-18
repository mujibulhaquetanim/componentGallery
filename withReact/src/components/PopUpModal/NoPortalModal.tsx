import React from "react";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoPortalModal: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <div
      className="flex flex-col top-0 left-0 right-0 bottom-0 fixed bg-[rgba(0,0,0,0.5)]"
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-4 border-2 p-5 top-[50%] left-[50%] fixed translate-x-[-50%] translate-y-[-50%] bg-slate-100">
        <h1 className="text-2xl font-bold flex justify-center">Modal Sample</h1>
        <p>To see the modal, click the button below</p>
        <p>
          To close the modal, click the button in the modal or in the background
        </p>
        <button className="p-2 border-2 bg-red-500">Close Modal</button>
      </div>
    </div>
  );
};
export default NoPortalModal;

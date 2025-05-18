import React from "react";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoPortalModal: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <div className="flex flex-col gap-2 border-2 p-2" onClick={() => setIsOpen(false)}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold flex justify-center">Modal Sample</h1>
        <p>To see the modal, click the button below</p>
        <p>
          To close the modal, click the button in the modal or in the background
        </p>
      </div>
      <button className="p-2 border-2 bg-red-500">Close Modal</button>
    </div>
  );
};
export default NoPortalModal;

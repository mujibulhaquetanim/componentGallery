import React from "react";
// import PortalModal from "./PortalModal";
import NoPortalModal from "./NoPortalModal";

const PopUpModal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <nav className="flex gap-2">
        {isOpen && <NoPortalModal setIsOpen={setIsOpen} />}
      </nav>
      <button onClick={() => setIsOpen(true)} className="p-2 border-2 bg-green-400">Open Modal</button>
    </div>
  );
};

export default PopUpModal;

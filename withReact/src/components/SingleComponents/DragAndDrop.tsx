import React from "react";

export const DragAndDrop: React.FC = function () {
  return (
    <div className="">
      <main className="m-3">
        <form action="">
          <input type="color" value={"#ff0000"} />
          <button type="button">+</button>
        </form>
        <div className="list">
          <div className="note">
            <span className="close">X</span>
            <textarea
              cols={30}
              rows={10}
              placeholder="Write content here..."
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DragAndDrop;

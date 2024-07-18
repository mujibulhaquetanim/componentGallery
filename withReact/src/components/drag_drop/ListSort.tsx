import React, { useState } from "react";

const ListSort: React.FC = function () {
  const [people, setPeople] = useState([
    { id: 1, name: "Emma Watson" },
    { id: 2, name: "Sharaddha Kapoor" },
    { id: 3, name: "Sabila Nur" },
    { id: 4, name: "Lisa" },
    { id: 5, name: "Millie" },
  ]);

  return (
    <main className="grid place-items-center min-h-max space-y-4">
      <h1 className="text-2xl font-bold mt-4">List of the Beauties</h1>
      {people.map((beauty, index) => (
        <div
          key={index}
          className="relative flex space-x-2 border rounded p-2 bg-slate-400"
          draggable
        >
          <p>{beauty.name}</p>
        </div>
      ))}
    </main>
  );
};

export default ListSort;

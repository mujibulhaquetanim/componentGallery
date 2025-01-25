import React from "react";
import profilePic from "../../assets/profilePic.png";

export const ProfileCard: React.FC = function () {
  return (
    <div className="h-screen grid place-items-center">
      <div className="upc m-3 grid place-items-center border w-1/3 rounded-md">
        <div className="w-full">
          <div className="bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-40 drop-shadow-2xl"></div>
          <div className="image flex justify-center -mt-24">
            <img
              className="w-36 h-36 rounded-full z-10"
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>

        <div className="Profile-down p-3">
          <div className="ProfileTitle justify-center flex text-3xl font-bold">
            Mohammed Hijab
          </div>
          <div className="text-justify m-2 p-1">
            Mohammed Hijab is a debater and public speaker who engages in
            discussions and polemics on a wide variety of topics including
            religion, politics and society.
          </div>
          <div className="flex justify-center">
            <button className="bg-green-950 text-white p-3 rounded-xs m-3 hover:scale-95">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import profilePic from "../../assets/profilePic.png";

export default function ProfileCard() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="upc m-3 grid place-items-center border-2 p-3 w-1/3">
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-20"></div>

        <div className="Profile-down p-3">
          <div className="image flex justify-center">
            <img
              className="w-36 h-36 rounded-full"
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
          <div className="ProfileTitle justify-center flex text-3xl font-bold">
            Mohammed Hijab
          </div>
          <div className="ProfileDescription">
            Mohammed Hijab is a debater and public speaker who engages in
            discussions and polemics on a wide variety of topics including
            religion, politics and society.
          </div>
          <div className="flex justify-center">
            <button className="bg-green-950 text-white p-3 rounded-sm m-3 hover:scale-95">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

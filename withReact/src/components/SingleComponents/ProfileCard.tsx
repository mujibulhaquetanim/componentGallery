import profilePic from "../../assets/profilePic.png";

export default function ProfileCard() {
  return (
    <div className="upc m-3 flex items-center justify-center border-2 p-3 w-1/3">
      <div className="Gradient w-full h-20"></div>

      <div className="Profile-down">
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
  );
}

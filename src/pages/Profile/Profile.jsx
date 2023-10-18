import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user, logOutUser } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handlelogOut = () => {
    logOutUser().then().then();
    navigate("/login");
  };
  return (
    <div className="flex flex-col md:flex-row gap-10 my-10 max-w-7xl mx-auto px-5">
      <div className="border md:w-64 h-[400px] md:h-[700px] relative">
        <img
          className="rounded-full mx-auto my-5"
          src={user?.photoURL}
          alt=""
        />
        <h1 className="text-4xl font-rancho text-center">
          {user?.displayName}
        </h1>
        <p className="text-center">{user.email}</p>
        <div className="absolute bottom-3  w-full text-center ">
          <button
            className="px-4 p-1 rounded-full border  border-[#FF4512] hover:bg-[#FF4512] font-rancho text-2xl duration-700 ease-linear"
            onClick={handlelogOut}
          >
            Log out
          </button>
        </div>
      </div>
      <div className="border flex-1"></div>
    </div>
  );
};

export default Profile;

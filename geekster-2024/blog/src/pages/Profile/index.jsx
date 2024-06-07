import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Profile = () => {
  const {
    authState: { user }
  } = useContext(AuthContext);

  const { photoURL, displayName, email, phoneNumber } = user;
  console.log(user);

  return (
    <div className=" h-screen bg-pattern pt-10">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="flex items-center justify-center p-4 bg-gray-200">
          <img
            className="w-32 h-32 rounded-full"
            src={photoURL}
            alt="Profile"
          />
        </div>
        <div className="p-4">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            {displayName}
          </h2>
          <p className="text-center text-gray-600">{email}</p>
          <p className="text-center text-gray-600">
            {phoneNumber || "No phone number provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

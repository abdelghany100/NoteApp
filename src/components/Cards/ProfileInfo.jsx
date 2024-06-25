import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo , onLogout }) => {
  const accessToken = localStorage.getItem("token");
  
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
         { getInitials(`${userInfo?.fullName}`)}
      </div>
      <div>
        <p className="text-sm font-medium">{userInfo?.fullName}</p>
        <button className="text-sm underline text-slate-700" onClick={onLogout}>
         {accessToken ? "Logout" : "Login" }
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;

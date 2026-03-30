import { UserButton, useUser } from "@clerk/react";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { menuItemsData } from "../assets/assets";

const Sidebar = () => {
  let { user } = useUser();
  const navigate = useNavigate();
  return (
    <div className="fixed z-40 w-72 h-screen bg-white border-r border-gray-200">
      <div className="flex items-center gap-2 border-b border-gray-200 p-3">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-950 to-indigo-800">
          Social Media
        </h1>
      </div>
      <div className="flex flex-col h-[calc(100vh-70px)] justify-between gap-1 pl-3 pt-5">
       <div className="flex flex-col gap-1">
         {menuItemsData.map((item, index) => (
          <NavLink
            to={item.to}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-2 p-4 ${isActive ? "bg-linear-to-r from-indigo-900 text-white to-transparent rounded-md pl-7" : ""}`
            }
          >
            <item.Icon />
            <p>{item.label}</p>
          </NavLink>
        ))}
        <button 
          onClick={() => navigate('/create-post')}
          className="rounded-md mr-2 text-white text-center p-4 bg-linear-to-r from-indigo-950 to-indigo-800 transition-opacity hover:opacity-90"
        >
          Create Post
        </button>
       </div>

        <div className="border-t flex border-gray-200 items-center justify-between pr-5 w-full ">
          <div className="flex h-20 gap-4 p-3 items-center">
            <UserButton />
            <div className="">
              <p className="">{user?.fullName}</p>
              <p className="text-gray-400 -mt-1">
                {user?.username || "username"}
              </p>
            </div>
          </div>
          <LogOut className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { Star } from "lucide-react";
import { SignIn } from "@clerk/react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-around">
      <div className="w-1/3">
        <div className="flex items-center gap-4">
          <img src={assets.group_users} alt="group" className="w-30" />
          <div>
            <div className="flex">
              {Array(5)
                .fill("")
                .map((item, index) => (
                  <Star key={index} className="text-indigo-900" />
                ))}
            </div>
            <p className="text-indigo-900">Used by 12k+ developers</p>
          </div>
        </div>
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-indigo-950 to-indigo-800 text-5xl font-bold mt-4">More than just friends truly connect</h1>
        <p className="text-indigo-900 text-xl mt-4">connect with global community on pingup.</p>
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  );
};

export default Login;

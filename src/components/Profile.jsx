import React from "react";
import { Camera } from "lucide-react";
import profilePic from "../assets/pexels-max-rahubovskiy-7394015.jpg";

function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 rounded-2xl shadow-lg w-full max-w-md h-screen flex flex-col px-0">
        <div className="bg-white w-full py-4 px-6 flex items-center justify-between shadow-md rounded-t-2xl">
          <h2 className="text-lg font-semibold text-gray-800">Settings</h2>
        </div>
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-20">
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border border-gray-300"
              />
              <div className="absolute bottom-0 right-0 bg-purple-700 rounded-full p-1 shadow cursor-pointer">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="-mt-8">
              <h3 className="text-lg font-medium text-gray-800">Marry Doe</h3>
              <p className="text-sm font-medium text-gray-500">Marry@gmail.com</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea repellat doloribus obcaecati distinctio facilis iusto voluptatibus officiis quasi consequatur possimus vitae
          </p>
          <hr className="border-t-2 border-dashed border-gray-400 mb-4" />
        </div>
        <div className="px-8 py-10">
          <hr className="border-t-2 border-dashed border-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Profile;

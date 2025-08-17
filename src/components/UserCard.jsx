import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="w-full flex items-center justify-center bg-zinc-800 px-4 py-10">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-8 hover:shadow-xl transition duration-300">
        
        {/* Profile Icon */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl">
          {name ? name[0].toUpperCase() : "?"}
        </div>

        {/* User Info */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col text-left">
            <span className="text-sm text-gray-500 font-medium">Name</span>
            <span className="text-lg font-semibold text-gray-800">{name}</span>
          </div>

          {/* Email */}
          <div className="flex flex-col text-left">
            <span className="text-sm text-gray-500 font-medium">Email</span>
            <span className="text-lg font-semibold text-gray-800">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

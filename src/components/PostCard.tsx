import { useState } from "react";
import profile from "../assets/blank-profile-picture-973460_1280.webp";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa6";
import { RiReplyFill } from "react-icons/ri";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostCard = ({user} : {user : any}) => {
  const [care, setCare] = useState(false);
  const [support, setSupport] = useState(false);

  const handleCare = () => {
    setCare(!care);
  };

  const handleSupport = () => {
    setSupport(!support);
  };
  return (
    <div className="flex flex-col overflow-y-scroll">
      {" "}
      <div className=" w-[700px] p-4 mx-auto bg-white border border-gray-300 rounded-lg shadow">
        <div className="flex items-start space-x-4">
          {/* Profile Image */}
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />

          {/* Post Content */}
          <div className="flex-1">
            {/* Username and Handle */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-800">{user?.username}</span>
                <span className="ml-2 text-sm text-gray-500">{user?.handle}</span>
                <span className="ml-2 text-sm text-gray-500">{user?.time}</span>
              </div>
            </div>

            {/* Post Text */}
            <p className="mt-2 text-gray-800">
              {user?.description}
            </p>

            {/* Post Actions */}
            <div className="flex justify-between mt-4 text-primary">
              <button
                onClick={handleCare}
                className="flex items-center space-x-2 cursor-pointer hover:text-hover"
              >
                <FaHandHoldingHeart />

                {care ? <span>1</span> : <span>Care</span>}
              </button>

              <button
                onClick={handleSupport}
                className="flex items-center space-x-2 cursor-pointer hover:text-primary"
              >
                <FaCommentMedical />
                <span>Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {support && (
        <div className=" w-[700px] p-4 mx-auto bg-white border border-gray-300 rounded-lg shadow flex items-center gap-2">
          <input
            className="w-[600px] px-4 py-2 border"
            type="text"
            placeholder="Support"
          />
          <RiReplyFill color="gray" />
        </div>
      )}
    </div>
  );
};

export default PostCard;

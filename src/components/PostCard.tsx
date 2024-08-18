import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/blank-profile-picture-973460_1280.webp";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa6";
import { RiReplyFill } from "react-icons/ri";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostCard = ({ user }: { user: any }) => {
  const [care, setCare] = useState(false);
  const [support, setSupport] = useState(false);

  const handleCare = () => {
    setCare(!care);
  };

  const handleSupport = () => {
    setSupport(!support);
  };

  return (
    <motion.div
      className="flex flex-col overflow-y-scroll"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Post Card */}
      <motion.div
        className="w-[700px] p-4 mx-auto bg-white border border-gray-300 rounded-lg shadow"
        whileHover={{ scale: 1.03 }}
      >
        <div className="flex items-start space-x-4">
          {/* Profile Image */}
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />

          {/* Post Content */}
          <div className="flex-1">
            {/* Username, Handle, and Time */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-800">{user?.username}</span>
                <span className="ml-2 text-sm text-gray-500">{user?.handle}</span>
                <span className="ml-2 text-sm text-gray-500">{user?.time}</span>
              </div>
            </div>

            {/* Post Description */}
            <p className="mt-2 text-gray-800">{user?.description}</p>

            {/* Post Actions */}
            <div className="flex justify-between mt-4 text-primary">
              {/* Care Button */}
              <motion.button
                onClick={handleCare}
                className="flex items-center space-x-2 cursor-pointer hover:text-hover"
                whileTap={{ scale: 0.9 }}
              >
                <FaHandHoldingHeart />
                {care ? <span>1</span> : <span>Care</span>}
              </motion.button>

              {/* Support Button */}
              <motion.button
                onClick={handleSupport}
                className="flex items-center space-x-2 cursor-pointer hover:text-primary"
                whileTap={{ scale: 0.9 }}
              >
                <FaCommentMedical />
                <span>Support</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reply Input Field */}
      {support && (
        <motion.div
          className="w-[700px] p-4 mx-auto mt-2 bg-white border border-gray-300 rounded-lg shadow flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            className="w-[600px] px-4 py-2 border rounded-lg"
            type="text"
            placeholder="Support"
          />
          <RiReplyFill color="gray" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default PostCard;

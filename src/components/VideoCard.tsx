/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const VideoCard = ({ item }: { item: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="m-4 duration-300 cursor-pointer w-72"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Thumbnail / Preview */}
      <div className="relative">
        {isHovered ? (
          <video
            src={item.previewVideo}
            className="object-cover w-full h-40 rounded-lg"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="object-cover w-full h-40 rounded-lg"
          />
        )}
        <span className="absolute px-1 text-xs text-white bg-black rounded bottom-2 right-2">
          {item.duration || "N/A"}
        </span>
      </div>

      {/* Video Details */}
      <div className="flex mt-3">
        {/* Channel Profile Image */}
        <img
          src={item.channel.profileImage}
          alt={item.channel.name}
          className="w-10 h-10 mr-3 rounded-full"
        />
        
        {/* Video Title and Channel Info */}
        <div>
          <h3 className="text-sm font-semibold line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500">{item.channel.name}</p>
          <p className="text-xs text-gray-500">
            {item.views} views • {item.uploadedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

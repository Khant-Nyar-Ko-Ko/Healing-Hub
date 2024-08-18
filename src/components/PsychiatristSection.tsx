import { FaStar } from "react-icons/fa";
import doctor1 from "../assets/doctors/download (1).jpeg";
import doctor2 from "../assets/doctors/download (2).jpeg";
import doctor3 from "../assets/doctors/download.jpeg";
import { NavLink } from "react-router-dom";

// Sample data for chat list
const chatData = [
  {
    id: 1,
    name: "Dr. John Doe",
    rating: 5.0,
    image: doctor1,
    active: true,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    rating: 3.8,
    image: doctor2,
    active: false,
  },
  {
    id: 3,
    name: "Dr. Michael Bee",
    rating: 4.5,
    image: doctor3,
    active: true,
  },
  {
    id: 4,
    name: "Dr. Emily Johnson",
    rating: 4.2,
    image: doctor2,
    active: false,
  },
  {
    id: 5,
    name: "Dr. Sarah Brown",
    rating: 4.9,
    image: doctor3,
    active: true,
  },
  {
    id: 6,
    name: "Dr. David Wilson",
    rating: 2.3,
    image: doctor1,
    active: false,
  },
];

const ChatList = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
        {halfStar && <FaStar className="text-yellow-400 opacity-50" />}
      </div>
    );
  };

  return (
    <div className="mx-4 my-6 overflow-hidden bg-white rounded-lg shadow-lg w-80">
      <div className="overflow-y-auto h-[450px]">
        <NavLink to="/chat">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center p-3 duration-300 bg-white cursor-pointer hover:bg-slate-100"
          >
            <img
              src={chat.image}
              alt={chat.name}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="flex-1 ml-3">
              <div className="flex justify-between">
                <h4 className="text-sm font-semibold">{chat.name}</h4>
                <div
                  className={`w-3 h-3 rounded-full ${
                    chat.active ? "bg-green-500" : "bg-red-400"
                  }`}
                ></div>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-600">
                {renderStars(chat.rating)}
              </div>
            </div>
          </div>
        ))}
        </NavLink>
      </div>
    </div>
  );
};

export default ChatList;

import PsychiatristProfile from "@/components/PsychiatristProfile";
import PsychiatristSection from "@/components/PsychiatristSection";
import { IoIosSend } from "react-icons/io";
import profile from "../../assets/blank-profile-picture-973460_1280.webp";
import { NavLink } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "Noob Master69",
    profileImage: profile,
    review:
      "Dr. Bee provided exceptional care and really listened to my concerns. I highly recommend them!",
  },
  {
    id: 2,
    name: "Bob Brown",
    profileImage: profile,
    review:
      "Very professional and understanding. The treatment plan was effective, and I felt supported throughout.",
  },
  {
    id: 3,
    name: "Catherine Tee",
    profileImage: profile,
    review:
      "A great experience overall. Dr. Bee's approach was thorough and compassionate. I am very satisfied with the care.",
  },
  {
    id: 4,
    name: "Mike Johnson",
    profileImage: profile,
    review:
      "Dr. Bee provided exceptional care and really listened to my concerns. I highly recommend them!",
  },
  {
    id: 5,
    name: "Peter Parker",
    profileImage: profile,
    review:
      "Dr. Bee provided exceptional care and really listened to my concerns. I highly recommend them!",
  },
];

const ChatPage = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-secondary">
        <PsychiatristSection />
      </div>
      <div className="relative w-3/4">
        <PsychiatristProfile />
        <NavLink to="/direct-chat">
          <button className="flex items-center gap-1 px-4 py-2 text-white rounded-full bg-primary hover:bg-hover mx-[400px] absolute top-[230px]">
            <IoIosSend /> <span>Send Message</span>{" "}
          </button>
        </NavLink>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-primary">
            Patient Reviews
          </h2>
          <div className="space-y-4 overflow-y-scroll h-[200px]">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex items-start p-3 space-x-4 border border-gray-200 rounded-lg"
              >
                <img
                  src={review.profileImage}
                  alt={review.name}
                  className="object-cover w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{review.name}</h4>
                  <p className="mt-1 text-gray-600">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

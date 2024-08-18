import profile from "../../assets/blank-profile-picture-973460_1280.webp";
import PostCard from "@/components/PostCard";

const users = [
  {
    id: 1,
    username: "Sophia Green",
    handle: "@soph_green",
    profileImage: profile,
    time: "2h",
    description:
      "Self-care isn’t selfish. It's essential. You can’t pour from an empty cup. Take care of yourself first. 🌿 #MentalHealthMatters",
    likes: 120,
    comments: 15,
  },
  {
    id: 2,
    username: "Ethan Wright",
    handle: "@ethan_wright",
    profileImage: profile,
    time: "4h",
    description:
      "Sometimes the best thing you can do is breathe and remind yourself that everything will be okay in time. Just keep going. 💪 #StayStrong",
    likes: 85,
    comments: 10,
  },
  {
    id: 3,
    username: "Isabella Brooks",
    handle: "@bella_brooks",
    profileImage: profile,
    time: "6h",
    description:
      "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity. 💖 #MentalHealthAwareness",
    likes: 95,
    comments: 12,
  },
  {
    id: 4,
    username: "Liam Turner",
    handle: "@liam_turner",
    profileImage: profile,
    time: "1d",
    description:
      "It’s okay to feel lost sometimes. It’s okay to ask for help. We all need support, and that’s perfectly human. 🙏 #YouAreNotAlone",
    likes: 150,
    comments: 20,
  },
  {
    id: 5,
    username: "Mia Thompson",
    handle: "@mia_thompson",
    profileImage: profile,
    time: "2d",
    description:
      "Remember to take things one day at a time. Healing is a process, not a destination. 🌸 #MentalHealthJourney",
    likes: 80,
    comments: 25,
  },
];

const CommunityPage = () => {
  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="What is on your mind?"
          className=" ml-[400px] w-[300px] px-4 py-2 border rounded"
        />
        <button className="px-4 py-2 text-white rounded bg-primary">
          Upload
        </button>
      </div>
      {users.map((user) => (
        <PostCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CommunityPage;

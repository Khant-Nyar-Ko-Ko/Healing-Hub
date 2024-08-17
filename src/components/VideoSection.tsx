import VideoCard from "./VideoCard";
import image1 from "../assets/thumbnail/image.png";
import image2 from "../assets/thumbnail/image2.png";
import image3 from "../assets/thumbnail/image3.png";
import image4 from "../assets/thumbnail/image4.png";
import image5 from "../assets/thumbnail/image5.png";
import image6 from "../assets/thumbnail/image6.png";
import creator1 from "../assets/creator/5957bf81479411.5d00ccdc8d19e.jpg";
import creator2 from "../assets/creator/images (1).jpeg";
import creator3 from "../assets/creator/images (1).png";
import creator4 from "../assets/creator/images.jpeg";
import creator5 from "../assets/creator/images.png";

import preview2 from "../assets/video/health2.mp4";
import preview1 from "../assets/video/health1.mp4";

const data = [
  {
    id: "1",
    title: "Understanding Anxiety: Causes and Solutions",
    channel: {
      name: "Mind Matters",
      profileImage: creator1,
    },
    thumbnail: image1,
    duration: "11:45",
    previewVideo: preview1,
  },
  {
    id: "2",
    title: "5 Ways to Improve Your Mental Well-being",
    channel: {
      name: "Healthy Minds",
      profileImage: creator2,
    },
    thumbnail: image2,
    duration: "11:32",
    previewVideo: preview2,
  },
  {
    id: "3",
    title: "Overcoming Depression: A Personal Journey",
    channel: {
      name: "Mental Health Journey",
      profileImage: creator3,
    },
    thumbnail: image3,
    duration: "32:00",
    previewVideo: preview1,
  },
  {
    id: "4",
    title: "Mindfulness Meditation for Stress Relief",
    channel: {
      name: "Calm Mind",
      profileImage: creator4,
    },
    thumbnail: image4,
    duration: "18:23",
    previewVideo: preview2,
  },
  {
    id: "5",
    title: "How to Build Resilience and Bounce Back from Setbacks",
    channel: {
      name: "Positive Vibes",
      profileImage: creator5,
    },
    thumbnail: image5,
    duration: "08:44",
    previewVideo: preview1,
  },
  {
    id: "6",
    title: "The Science Behind Mental Health: What You Need to Know",
    channel: {
      name: "Brain Health",
      profileImage: creator4,
    },
    thumbnail: image6,
    duration: "12:42",
    previewVideo: preview2,
  },
  {
    id: "7",
    title: "Coping with Social Anxiety in a Post-Pandemic World",
    channel: {
      name: "Mental Health Awareness",
      profileImage: creator2,
    },
    thumbnail: image1,
    duration: "05:42",
    previewVideo: preview1,
  },
  {
    id: "8",
    title: "The Importance of Sleep for Mental Health",
    channel: {
      name: "Sleep Well",
      profileImage: creator3,
    },
    thumbnail: image2,
    duration: "12:32",
    previewVideo: preview2,
  },
];

const VideoSection = () => {
  return (
    <div className="grid items-center justify-center grid-cols-4 gap-10 px-[140px] p-8">
      {data?.map((item) => (
        <VideoCard key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default VideoSection;

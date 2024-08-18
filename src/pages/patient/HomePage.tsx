import Banner from "@/components/Banner";
import VideoSection from "@/components/VideoSection";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Banner with animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Banner />
      </motion.div>

      {/* Search Bar with animation */}
      <motion.div
        className="relative flex justify-center w-screen py-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <input
          type="text"
          placeholder="Search"
          className="border w-[600px] px-4 py-2 rounded-full"
        />
        <CiSearch
          className="absolute right-[450px] top-[44px]"
          color="gray"
          size="20px"
        />
      </motion.div>

      {/* Recommendation Header */}
      <motion.section
        className="px-[160px] text-lg text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <h2>Recommendation</h2>
      </motion.section>

      {/* Video Section with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <VideoSection />
      </motion.div>
    </div>
  );
};

export default HomePage;

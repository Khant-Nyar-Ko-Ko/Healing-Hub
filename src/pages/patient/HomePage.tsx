import Banner from "@/components/Banner";
import VideoSection from "@/components/VideoSection";
import { CiSearch } from "react-icons/ci";

const HomePage = () => {
  return (
    <div className="relative ">
      <Banner />
      <div className="relative flex justify-center w-screen py-8">
        <input
          type="text"
          placeholder="Search"
          className=" border w-[600px] px-4 py-2 rounded-full rel"
        />
        <CiSearch
          className=" absolute right-[450px] top-[44px]"
          color="gray"
          size="20px"
        />
      </div>
      <section className=" px-[160px] text-lg text-primary">
        <h2>Recommendation</h2>
      </section>
      <VideoSection />
    </div>
  );
};

export default HomePage;

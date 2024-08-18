import PsychiatristSection from "@/components/PsychiatristSection";
import empty from "../assets/empty.jpg";

const EmptyChat = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-secondary">
        <PsychiatristSection />
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 gap-3">
        <p className="font-semibold">Choose your favorite therapist</p>
        <img src={empty} alt="" />
      </div>
    </div>
  );
};

export default EmptyChat;

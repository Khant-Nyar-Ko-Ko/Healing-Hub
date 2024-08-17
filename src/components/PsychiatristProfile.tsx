import { FaStar } from "react-icons/fa";
import doctor3 from "../assets/doctors/download.jpeg";

const PsychiatristProfile = () => {

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
    <div className="flex justify-between py-6 px-[260px] items-center bg-slate-100">
        <img src={doctor3} className="rounded-full w-[200px] h-[200px] object-cover" alt="" />
        <div>
            <h3 className="font-semibold">Dr. Michael Bee
            </h3>
            <p className="text-sm text-gray-600">Psychiatrist . Mae Fah Luang Hosiptal</p>
            <div className="flex items-center mt-1 text-2xl text-gray-600">
                {renderStars(4.5)}
              </div>
              <div className="flex flex-col gap-2">
                <div className="my-2 border-b"></div>
                <div className="flex items-center justify-between gap-5">
                    <p>1 hour session:   1500 Baht</p>
                    <button className="px-4 py-1 text-white rounded-lg bg-primary hover:bg-hover">Buy</button>
                </div>
                <div className="flex items-center gap-5">
                    <p>2 hour session:   2500 Baht</p>
                    <button className="px-4 py-1 text-white rounded-lg bg-primary hover:bg-hover">Buy</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default PsychiatristProfile
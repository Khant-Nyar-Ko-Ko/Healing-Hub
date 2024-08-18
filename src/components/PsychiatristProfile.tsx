import { useState } from "react";
import { FaStar } from "react-icons/fa";
import doctor3 from "../assets/doctors/download.jpeg";

const PsychiatristProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState("");

  const openModal = (session: string) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <>
      <div className="flex justify-between py-6 px-[260px] items-center bg-slate-100">
        <img
          src={doctor3}
          className="rounded-full w-[200px] h-[200px] object-cover"
          alt="Doctor"
        />
        <div>
          <h3 className="font-semibold">Dr. Michael Bee</h3>
          <p className="text-sm text-gray-600">Psychiatrist · Mae Fah Luang Hospital</p>
          <div className="flex items-center mt-1 text-2xl text-gray-600">
            {renderStars(4.5)}
          </div>
          <div className="flex flex-col gap-2">
            <div className="my-2 border-b"></div>
            <div className="flex items-center justify-between gap-5">
              <p>1 hour session: 1500 Baht</p>
              <button
                className="px-4 py-1 text-white rounded-lg bg-primary hover:bg-hover"
                onClick={() => openModal("1 hour session: 1500 Baht")}
              >
                Buy
              </button>
            </div>
            <div className="flex items-center gap-5">
              <p>2 hour session: 2500 Baht</p>
              <button
                className="px-4 py-1 text-white rounded-lg bg-primary hover:bg-hover"
                onClick={() => openModal("2 hour session: 2500 Baht")}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="mb-4 text-lg font-semibold">Payment for {selectedSession}</h2>
            <form>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-lg"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-1/2 p-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-hover"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PsychiatristProfile;

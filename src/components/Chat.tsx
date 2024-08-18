import { useState } from "react";
import PsychiatristSection from "@/components/PsychiatristSection";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! How’s it going?", sender: "friend" },
    {
      id: 2,
      text: "I’m doing well, thanks for asking! How about you?",
      sender: "me",
    },
    {
      id: 3,
      text: "I’m good too! 😊",
      sender: "friend",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: input, sender: "me" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-secondary">
        <PsychiatristSection />
      </div>
      <div className="flex flex-col w-full h-[500px] bg-white rounded-lg overflow-hidden m-5 shadow">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-3 px-4 font-bold text-white bg-primary">
          <h2>Dr. Michael Bee</h2>
          <div className="flex gap-5">
            <FaPhoneAlt />
            <FaVideo />
            <NavLink to="/chat">
              <IoMdClose />
            </NavLink>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === "me"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex items-center p-3 bg-white border-t">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="p-2 ml-3 text-white rounded-lg bg-primary"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

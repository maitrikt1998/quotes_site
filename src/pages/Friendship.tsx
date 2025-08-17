import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

function Friendship() {
  const wishes = [
    "Wishing you a day filled with love, laughter, and cake! 🎂",
    "May your birthday be the start of a year full of happiness and success. 🌟",
    "Happy Birthday! You’re not older, just more amazing. 🎈",
    "Here’s to another year of making memories and chasing dreams. ✨",
    "Your smile makes the world brighter — may it shine even more today. 💖",
    "Happy Birthday! May your day be as beautiful as your heart. 🌸",
  ];

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 p-6">
      <div className="backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-6xl">
        {/* Title */}
        <header className="text-center max-w-2xl mt-8 mx-auto">

          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
            🎉 Happy Friendship Wishes 🎂
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Celebrate your loved ones’ special day with warm, heartfelt, and joyful birthday messages.
            Whether it’s for friends, family, or colleagues, we’ve got wishes that will make their day extra special.
          </p>
        </header>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition relative"
            >
              <p className="text-gray-800 italic pr-10 bg-yellow-100 p-3 rounded">
                {wish}
                {/* Copy Icon */}
                <button
                    onClick={() => handleCopy(wish)}
                    className="absolute top-4 right-4 text-pink-500 hover:text-pink-700 transition"
                >
                    {copied === wish ? <FaCheck size={18} /> : <FaRegCopy size={18} />}
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friendship;
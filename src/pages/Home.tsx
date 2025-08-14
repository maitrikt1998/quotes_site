import { Link } from "react-router-dom";

function Home() {
  const categories = [
    { path: "/birthday-wishes", label: "🎂 Birthday Wishes", desc: "Send heartfelt birthday greetings that brighten someone’s day.", color: "from-pink-100 to-pink-50" },
    { path: "/good-morning", label: "🌅 Good Morning", desc: "Start the day with positive energy and cheerful wishes.", color: "from-yellow-100 to-yellow-50" },
    { path: "/good-night", label: "🌙 Good Night", desc: "Wish peaceful dreams and a restful night.", color: "from-blue-100 to-blue-50" },
    { path: "/congratulations", label: "🎉 Congratulations", desc: "Celebrate achievements with warm congratulatory messages.", color: "from-green-100 to-green-50" },
    { path: "/motivation", label: "✨ Motivation", desc: "Get inspired with daily motivational quotes.", color: "from-orange-100 to-orange-50" },
    { path: "/friendship", label: "🤝 Friendship", desc: "Show your friends how much they mean to you.", color: "from-purple-100 to-purple-50" },
    { path: "/love", label: "❤️ Love", desc: "Express your love with heartfelt messages.", color: "from-red-100 to-red-50" },
    { path: "/anniversary", label: "💖 Anniversary", desc: "Celebrate love and togetherness with special wishes.", color: "from-pink-200 to-pink-50" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center justify-center p-6">
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-purple-600">Daily Wishes & Quotes</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Find the perfect words for any occasion — Birthday Wishes, Motivational Quotes, Anniversary Greetings,
          and more. Make every moment special with beautiful messages.
        </p>
        <Link
          to="/birthday-wishes"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
        >
          🎉 Explore Birthday Wishes
        </Link>
      </header>

      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className={`bg-gradient-to-br ${cat.color} p-6 rounded-lg shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1`}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{cat.label}</h2>
            <p className="text-gray-600">{cat.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;

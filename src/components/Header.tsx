import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Motivational Website</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="container mx-auto text-center py-4">
        <p>&copy; {new Date().getFullYear()} Motivational Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

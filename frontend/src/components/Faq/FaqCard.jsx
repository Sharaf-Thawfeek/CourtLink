import React from "react";

const FaqCard = ({ question, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
      >
        <span className="font-semibold text-lg text-textColor">{question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700 bg-white">{content}</div>
      )}
    </div>
  );
};

export default FaqCard;

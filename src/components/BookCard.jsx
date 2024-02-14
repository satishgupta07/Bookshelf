import React, { useState } from "react";

const BookCard = ({ book }) => {
  const [readingStatus, setReadingStatus] = useState(book.readingStatus);

  const toggleReadingStatus = () => {
    setReadingStatus(!readingStatus);
  };

  return (
    <div className="bg-emerald-50 shadow-md rounded-lg overflow-hidden">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
        <p className="text-sm text-gray-600 mb-1">Author: {book.author}</p>
        <p className="text-sm text-gray-600 mb-1">
          Published Year: {book.publishedYear}
        </p>
        <button
          onClick={toggleReadingStatus}
          className={`px-3 py-1 rounded-md text-sm ${
            readingStatus
              ? "bg-green-500 text-white"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          {readingStatus ? "Read" : "Unread"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;

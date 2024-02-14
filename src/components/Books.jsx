import React from "react";
import BookCard from "./BookCard";

const Books = ({ books, currentPage, totalPages, onPageChange }) => {
  const startIndex = (currentPage - 1) * 20;
  const endIndex = Math.min(startIndex + 20, books.length);

  const booksToShow = books.slice(startIndex, endIndex);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksToShow.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
      {books.length > 20 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 rounded-md text-sm bg-emerald-200 text-gray-700"
          >
            Previous
          </button>
          <span className="mr-2 px-2 py-2 rounded-md text-sm bg-emerald-200 text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-2 px-4 py-2 rounded-md text-sm bg-emerald-200 text-gray-700"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;

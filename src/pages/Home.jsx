import React, { useEffect, useState } from "react";
import { Books, SearchBar } from "../components";
import { fetchBooks, handleSearch } from "../api/index";

function Home() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBooks().then((data) => {
      console.log("Books Data : ");
      console.log(data);
      setBooks(data);
      setTotalPages(Math.round(data.length / 20));
    });
  }, []);

  const handlePageChange = (page) => {
    console.log("Page No. : " + page + " Total Page : " + totalPages);
    setCurrentPage(page);
  };

  const searchBooks = async (query) => {
    console.log("Search Query : " + query);
    const searchData = await handleSearch(query);
    console.log("Searched Data : ");
    console.log(searchData);
    setBooks(searchData);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <SearchBar onSearch={searchBooks} />{" "}
        <Books
          books={books}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Home;

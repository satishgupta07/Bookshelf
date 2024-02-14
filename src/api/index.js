import axios from "axios";

export const fetchBooks = async () => {
  try {
    const response = await axios.get(
      "https://openlibrary.org/people/mekBot/books/already-read.json"
    );
    const bookData = response.data.reading_log_entries.map((entry) => ({
      key: entry.work.key,
      title: entry.work.title,
      author: entry.work.author_names.join(", "),
      publishedYear: entry.work.first_publish_year,
      coverUrl: `https://covers.openlibrary.org/b/id/${entry.work.cover_id}-M.jpg`,
      readingStatus: true,
    }));
    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

export const handleSearch = async (query) => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
    );
    const searchData = response.data.docs.map((book) => ({
      key: book.key,
      title: book.title,
      author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
      publishedYear: book.first_publish_year || "Unknown Year",
      coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
      readingStatus: false,
    }));

    return searchData;
  } catch (error) {
    console.error("Error searching books:", error);
  }
};

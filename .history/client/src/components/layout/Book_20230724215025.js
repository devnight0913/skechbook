import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const bookId = useParams();
  console.log(bookId);
  return (
    <div>
      <h1>{{ bookId }}</h1>
      <h1>SDFASDFASDF</h1>
      <h1>SDFASDFASDF</h1>
      <h1>SDFASDFASDF</h1>
    </div>
  );
};

export default Book;

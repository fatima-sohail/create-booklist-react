import React from "react";
import SpecificBook from "./Book";

import booksData from "./booksData"


const BookList = () => {
  return (
    <section className="bookList">
      {booksData.map((book,index)=> {
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  );
};

export default BookList;

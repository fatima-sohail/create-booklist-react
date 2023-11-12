import React from "react";

const SpecificBook = (props: any) => {
  const { img, title, author } = props; //acess children(<p></p>) in this function
  return (
    <div className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{author}</h4>
      
    </div>
  );
};

export default SpecificBook;

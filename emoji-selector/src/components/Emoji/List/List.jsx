import React from "react";
import style from "../../emoji.module.css";

const List = ({ children }) => {
  return <div className={style.emojisList}>{children}</div>;
};

export default List;

import React from "react";
import style from "../../emoji.module.css";

const Button = ({ emoji, onClick }) => {
  return (
    <button className={style.emojiButton} onClick={() => onClick(emoji)}>
      {emoji.symbol}
    </button>
  );
};

export default Button;

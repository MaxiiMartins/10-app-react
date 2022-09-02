import React, { useState } from "react";
import style from "../../emoji.module.css";

const Search = ({ emojiList, setEmojis }) => {
  const [value, setvalue] = useState("");
  const handleChange = (e) => {
    setvalue(e.target.value);
    const valorInput = e.target.value;
    if (!!valorInput) {
      const search = emojiList.filter(
        (element) =>
          element.name.toLowerCase().includes(valorInput.toLowerCase()) ||
          element.keywords.toLowerCase().includes(valorInput.toLowerCase())
      );
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };

  return (
    <input
      className={style.search}
      type="text"
      onChange={handleChange}
      value={value}
      placeholder="Fire....."
    />
  );
};

export default Search;

import React, { useRef } from "react";
import Picker from "./Picker";
import style from "../../emoji.module.css";

const Input = () => {
  const refInput = useRef(null);

  return (
    <div className={style.inputContainer}>
      <input className={style.searchInput} ref={refInput} type="text" placeholder="¿Emojis?" />
      <Picker ref={refInput} />
    </div>
  );
};

export default Input;

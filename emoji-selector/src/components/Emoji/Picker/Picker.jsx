import React, { forwardRef, useEffect, useRef } from "react";
import { useState } from "react";
import { data as emojiList } from "../../data";
import Button from "../Button/Button";
import List from "../List/List";
import Search from "../Search/Search";
import style from "../../emoji.module.css";

export const Picker = (props, inputRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);
  const containerRef = useRef(null);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClickEmoji = (emoji) => {
    // capturo la posicion donde esta escribiendo
    const cursorPos = inputRef.current.selectionStart;
    //  hacemos es capturar nuestro cursor para poder ingresar
    //  el emoji entre la posicion donde esta escribiendo
    const prev = inputRef.current.value.slice(0, cursorPos);
    const next = inputRef.current.value.slice(cursorPos);
    // insertamos el emoji en el texto y lo asignamos al nuevo valor del input
    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
    // regresamos el foco donde colocamos el emoji
    inputRef.current.focus();
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmojis([...emojiList]);
      }
    });
  }, []);

  return (
    <div ref={containerRef} className={style.containerPicker}>
      <button
        className={style.emojiPickerButton + " " + style.emojiButton}
        onClick={handleClickOpen}
      >
        🔥
      </button>
      {isOpen ? (
        <div className={style.emojiPickerContainer}>
          <Search emojiList={emojiList} setEmojis={setEmojis} />
          <List>
            {emojis.map((emoji, index) => (
              <Button key={index} onClick={handleClickEmoji} emoji={emoji} />
            ))}
          </List>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default forwardRef(Picker);

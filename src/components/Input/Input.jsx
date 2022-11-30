import { useState, useRef } from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = ({
  pokeName,
  setIsCorrect,
  score,
  setScore,
  isCorrect,
  isShown,
}) => {
  const [input, setInput] = useState("");
  const inpt = useRef();

  let clicked = (e) => {
    e.preventDefault();

    if (pokeName === input.toLowerCase()) {
      setIsCorrect(true);
      setScore(score + 1);
      inpt.current.className = "pokemon-input pokemon-input-correct";
    } else {
      setIsCorrect(false);
      inpt.current.className = "pokemon-input pokemon-input-wrong";
    }
  };

  const change = (e) => {
    inpt.current.className = "pokemon-input";
    setInput(e.target.value);
  };

  return (
    <form className="input-form" action="">
      <label className="lbl" htmlFor="pkemon-input">
        Pokemon Name:{" "}
      </label>
      <input
        ref={inpt}
        className="pokemon-input"
        name="pokemon-input"
        type="text"
        value={input}
        onChange={change}
        onClick={() => setInput("")}
      />
      <Button
        display={"Submit"}
        clicked={clicked}
        isCorrect={isCorrect}
        classStyle={"bttn"}
        isShown={isShown}
      />
    </form>
  );
};

export default Input;

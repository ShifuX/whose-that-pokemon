import { useState } from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = ({ pokeName, setIsCorrect, score, setScore, isCorrect }) => {
  const [input, setInput] = useState("");

  let clicked = (e) => {
    e.preventDefault();

    if (pokeName === input.toLowerCase()) {
      setIsCorrect(true);
      setScore(score + 1);
      clear();
    } else {
      setIsCorrect(false);
    }
  };

const clear = () => {
  setInput('');
};

  return (
    <form className="input-form" action="">
      <label className="lbl" htmlFor="pkemon-input">Pokemon Name: </label>
      <input
        className="pokemon-input"
        name="pokemon-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={clear}
      />
      <Button display={"Submit"} clicked={clicked} isCorrect={isCorrect} classStyle={'bttn'} />
    </form>
  );
};

export default Input;

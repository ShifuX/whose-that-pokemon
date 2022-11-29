import { useState } from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = ({ pokeName, setIsCorrect, score, setScore }) => {
  const [input, setInput] = useState("");

  let clicked = (e) => {
    e.preventDefault();

    if (pokeName === input.toLowerCase()) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <form className="input-form" action="">
      <label htmlFor="pkemon-input">Pokemon Name: </label>
      <input
        className="pokemon-input"
        name="pokemon-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button display={"Submit"} clicked={clicked} />
    </form>
  );
};

export default Input;

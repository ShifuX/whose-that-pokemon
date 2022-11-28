import './Input.css';
import Button from "../Button/Button"

const Input = () => {
    let clicked = (e) => {
        e.preventDefault();
    }
  return (
    <form className="input-form" action="">
        <label htmlFor="pkemon-input">Pokemon Name: </label>
        <input className='pokemon-input' name="pokemon-input" type="text" />
        <Button display={"Submit"} clicked={clicked} />
    </form>
  )
}

export default Input
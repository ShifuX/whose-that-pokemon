import './Button.css';

const Button = ({ display, clicked, isCorrect, isShown }) => {
  return (
    <button className='bttn' onClick={clicked} disabled={(isShown ? isCorrect : true)} >{display}</button>
  )
}

Button.defaultProps = {
  isCorrect: false
}

export default Button
import './Button.css';

const Button = ({ display, clicked, isCorrect }) => {
  return (
    <button className='bttn' onClick={clicked} disabled={isCorrect} >{display}</button>
  )
}

Button.defaultProps = {
  isCorrect: false
}

export default Button
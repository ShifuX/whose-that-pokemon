import './Button.css';

const Button = ({ display, clicked }) => {
  return (
    <button className='bttn' onClick={clicked}>{display}</button>
  )
}

export default Button
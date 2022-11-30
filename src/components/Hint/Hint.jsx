import './Hint.css';

const Hint = ({ hintMssg, isHint, clicked, pokemonType }) => {

  return (
    <div className={`modal ${isHint ? 'show-hint' : 'hide-hint'}`} onClick={clicked} >
        <div className="modal-content">
            <span className="close">&times;</span>
            <p className="hintText">The name of this {pokemonType} type pokemon starts with: {hintMssg.toUpperCase()}</p>
        </div>
    </div>
  )
}

Hint.defaultProps = {
  hintMssg: 'n/a'
}

export default Hint
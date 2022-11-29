import { useRef } from "react";
import "./Card.css";

const Card = ({ pokeImg, isCorrect }) => {
  const imgP = useRef();
 if (!isCorrect && pokeImg) {
    imgP.current.filter = "brightness()";
 }
  return (
    <div>
      <div className="card-container">
        <div className='card'>
          <img ref={imgP} className="pokemon-img" src={pokeImg} alt='Pokemon'/>
        </div>
      </div>
      
    </div>
  )
}

export default Card
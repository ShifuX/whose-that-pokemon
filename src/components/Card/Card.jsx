import "./Card.css";

const Card = ({ pokeImg, isCorrect }) => {
 
  return (
    <div>
      <div className="card-container">
        <div className='card'>
          <img className={isCorrect ? 'pokemon-img-correct' : 'pokemon-img'} src={pokeImg} alt='pokemon'/>
        </div>
      </div>
      
    </div>
  )
}

export default Card
import './Score.css';

const Score = ({ score }) => {
  return (
    <div className='score-container'>
        <h1>Score: {score}</h1>
    </div>
  )
}

export default Score
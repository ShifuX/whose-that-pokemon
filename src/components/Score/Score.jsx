import './Score.css';

const Score = ({ score }) => {
  return (
    <div className='score-container'>
        <p>Score: {score}</p>
    </div>
  )
}

export default Score
import Button from "../Button/Button";

const GenLayout = ({
  startGame,
  isShown
}) => {
  return (
    <div>
      <Button display={"Gen 1"} clicked={() => startGame(1)} isShown={isShown} />
      <Button display={"Gen 2"} clicked={() => startGame(2)} isShown={isShown} />
      <Button display={"Gen 3"} clicked={() => startGame(3)} isShown={isShown} />
      <Button display={"Gen 4"} clicked={() => startGame(4)} isShown={isShown} />
      <Button display={"Gen 5"} clicked={() => startGame(5)} isShown={isShown} />
      <Button display={"Gen 6"} clicked={() => startGame(6)} isShown={isShown} />
    </div>
  );
};

export default GenLayout;

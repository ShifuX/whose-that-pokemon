import { Header, Card, Input, Score, Button, Hint } from "./components";
import { useEffect, useState } from "react";
import headerLogo from "./Assets/pokeLogo.jpg";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isHint, setIsHint] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const pokemonsFetched = [];
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=900")
      .then((res) => {
        for (let e of res.data.results) {
          pokemonsFetched.push({ name: e.name, url: e.url });
        }
        setPokemons(pokemonsFetched);
      })
      .catch((error) => {
        console.log("ERROR!!! " + error);
      });
  }, []);

  const getPokemon = () => {
    setIsCorrect(false);
    let rand = Math.floor(Math.random() * pokemons.length - 1);
    let pokemon = pokemons[rand];
    setPokeName(pokemon.name.toLowerCase());
    let url = pokemon.url;

    axios
      .get(url)
      .then((res) => {
        setPokemonType(res.data.types[0].type.name);
        setPokeImg(res.data.sprites.front_default);
      })
      .catch((error) => {
        console.log("ERROR!!! " + error);
      });
    setPokemons(pokemons.filter((poke) => poke.name !== pokemon.name));
  };

  const startGame = () => {
    getPokemon();
    setIsShown(true);
  };

  const reset = () => {
    setScore(0);
    setIsShown(false);
  };

  const hint = () => {
    setIsHint(true);
  };
  const hideHint = () => {
    setIsHint(false);
  };

  return (
    <div>
      <Header headerLogo={headerLogo} />
      <Hint
        hintMssg={pokeName[0]}
        isHint={isHint}
        clicked={hideHint}
        pokemonType={pokemonType}
      />
      {!isShown && (
        <div className="start-bttn">
          <Button display={"Start"} clicked={startGame} isShown={!isShown} />
        </div>
      )}
      {isShown && <Card pokeImg={pokeImg} isCorrect={isCorrect} />}

      <Input
        pokeName={pokeName}
        setIsCorrect={setIsCorrect}
        score={score}
        setScore={setScore}
        isCorrect={isCorrect}
        isShown={isShown}
      />
      <Score score={score} />
      <div className="row-bttn-app">
        <Button display={"Reset"} clicked={reset} isShown={isShown} />
        <Button
          display={"Skip"}
          clicked={getPokemon}
          isCorrect={isCorrect}
          isShown={isShown}
        />
        <Button display={"Hint"} clicked={hint} isShown={isShown} />
        <Button
          display={"Next"}
          clicked={getPokemon}
          isCorrect={!isCorrect}
          isShown={isShown}
        />
      </div>
    </div>
  );
}

export default App;

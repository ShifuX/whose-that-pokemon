import { Header, Card, Input, Score, Button, Hint } from "./components";
import { useEffect, useState } from "react";
import headerLogo from "./Assets/pokeLogo.jpg";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  // const [pokemonType, setPokemonType] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isHint, setIsHint] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const pokemonsFetched = [];
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=900").then((res) => {
      console.log(res.data); // testing
      for (let e of res.data.results) {
        pokemonsFetched.push({ name: e.name, url: e.url });
      }
      setPokemons(pokemonsFetched);
    });
  }, []);

  const getPokemon = () => {
    setIsCorrect(false);
    let rand = Math.floor(Math.random() * pokemons.length - 1);
    let pokemon = pokemons[rand];
    console.log(pokemons[rand]);
    setPokeName(pokemon.name.toLowerCase());
    let url = pokemon.url;

    axios.get(url).then((res) => {
      console.log(res.data);
      setPokeImg(res.data.sprites.front_default);
    });
    setPokemons(pokemons.filter((poke) => poke.name !== pokemon.name));
    console.log(pokemon); // testing
    console.log(pokemons); // testing
  };

  const reset = () => {
    setScore(0);
  };

  const hint = () => {
    setIsHint(true);
  };
  const hideHint = (e) => {
    setIsHint(false);
  };

  return (
    <div>
      <Header headerLogo={headerLogo} />
      <Hint hintMssg={pokeName[0]} isHint={isHint} clicked={hideHint} />
      <Card pokeImg={pokeImg} isCorrect={isCorrect} />
      <Input
        pokeName={pokeName}
        setIsCorrect={setIsCorrect}
        score={score}
        setScore={setScore}
        isCorrect={isCorrect}
      />
      <Score score={score} />
      <div className="row-bttn-app">
        <Button display={"Reset"} clicked={reset} />
        <Button display={"Skip"} clicked={getPokemon} isCorrect={isCorrect} />
        <Button display={"Hint"} clicked={hint} />
        <Button display={"Next"} clicked={getPokemon} isCorrect={!isCorrect} />
      </div>
    </div>
  );
}

export default App;

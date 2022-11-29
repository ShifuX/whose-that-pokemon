import { Header, Card, Input, Score, Button } from "./components";
import { useEffect, useState } from "react";
import headerLogo from "./Assets/pokeLogo.jpg";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const pokemon = [];
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=900").then((res) => {
      console.log(res.data); // testing
      for (let e of res.data.results) {
        pokemon.push({ name: e.name, url: e.url });
      }
      setPokemons(pokemon);
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
      setPokeImg(res.data.sprites.front_default);
    });
    console.log(pokemon); // testing
  };

  return (
    <div>
      <Header headerLogo={headerLogo} />
      <Card pokeImg={pokeImg} isCorrect={isCorrect} />
      <Input
        pokeName={pokeName}
        setIsCorrect={setIsCorrect}
        score={score}
        setScore={setScore}
        isCorrect={isCorrect}
      />
      <Score score={score} />
      <div className="next-bttn-app">
        <Button display={"Next"} clicked={getPokemon} />
      </div>
    </div>
  );
}

export default App;

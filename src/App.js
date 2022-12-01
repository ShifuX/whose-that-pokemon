import {
  Header,
  Card,
  Input,
  Score,
  Button,
  Hint,
  GenLayout,
} from "./components";
import { useEffect, useState } from "react";
import headerLogo from "./Assets/pokeLogo.jpg";
import "./App.css";
import axios from "axios";

function App() {
  const [gen1Pokemons, setGen1Pokemons] = useState([]);
  const [gen2Pokemons, setGen2Pokemons] = useState([]);
  const [gen3Pokemons, setGen3Pokemons] = useState([]);
  const [gen4Pokemons, setGen4Pokemons] = useState([]);
  const [gen5Pokemons, setGen5Pokemons] = useState([]);
  const [gen6Pokemons, setGen6Pokemons] = useState([]);
  const [pickedGen1, setPickedGen1] = useState(false);
  const [pickedGen2, setPickedGen2] = useState(false);
  const [pickedGen3, setPickedGen3] = useState(false);
  const [pickedGen4, setPickedGen4] = useState(false);
  const [pickedGen5, setPickedGen5] = useState(false);
  const [pickedGen6, setPickedGen6] = useState(false);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isHint, setIsHint] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isStartShown, setIsStartShown] = useState(false);
  const [isCardShown, setCardShown] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const pokemonsFetched = [];
    const gen1 = [],
      gen2 = [],
      gen3 = [],
      gen4 = [],
      gen5 = [],
      gen6 = [];
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=722")
      .then((res) => {
        for (let e of res.data.results) {
          pokemonsFetched.push({ name: e.name, url: e.url });
        }

        for (let i = 0; i < pokemonsFetched.length - 1; i++) {
          if (i < 151) {
            gen1.push(pokemonsFetched[i]);
          } else if (i >= 151 && i < 251) {
            gen2.push(pokemonsFetched[i]);
          } else if (i >= 251 && i < 386) {
            gen3.push(pokemonsFetched[i]);
          } else if (i >= 386 && i < 493) {
            gen4.push(pokemonsFetched[i]);
          } else if (i >= 493 && i < 649) {
            gen5.push(pokemonsFetched[i]);
          } else if (i >= 649 && i < 721) {
            gen6.push(pokemonsFetched[i]);
          }
        }

        setGen1Pokemons(gen1);
        setGen2Pokemons(gen2);
        setGen3Pokemons(gen3);
        setGen4Pokemons(gen4);
        setGen5Pokemons(gen5);
        setGen6Pokemons(gen6);
      })
      .catch((error) => {
        console.log("ERROR!!! " + error);
      });
  }, []);

  const getPokemon = () => {
    setIsCorrect(false);
    let rand;
    let pokemon;

    if (pickedGen1) {
      rand = Math.floor(Math.random() * gen1Pokemons.length - 1);
      pokemon = gen1Pokemons[rand];
      setGen1Pokemons(
        gen1Pokemons.filter((poke) => poke.name !== pokemon.name)
      );
    } else if (pickedGen2) {
      rand = Math.floor(Math.random() * gen2Pokemons.length - 1);
      pokemon = gen2Pokemons[rand];
      setGen2Pokemons(
        gen2Pokemons.filter((poke) => poke.name !== pokemon.name)
      );
    } else if (pickedGen3) {
      rand = Math.floor(Math.random() * gen3Pokemons.length - 1);
      pokemon = gen3Pokemons[rand];
      setGen3Pokemons(
        gen3Pokemons.filter((poke) => poke.name !== pokemon.name)
      );
    } else if (pickedGen4) {
      rand = Math.floor(Math.random() * gen4Pokemons.length - 1);
      pokemon = gen4Pokemons[rand];
      setGen4Pokemons(
        gen4Pokemons.filter((poke) => poke.name !== pokemon.name)
      );
    } else if (pickedGen5) {
      rand = Math.floor(Math.random() * gen5Pokemons.length - 1);
      pokemon = gen5Pokemons[rand];
      setGen5Pokemons(
        gen5Pokemons.filter((poke) => poke.name !== pokemon.name)
      );
    } else if (pickedGen6) {
      rand = Math.floor(Math.random() * gen6Pokemons.length - 1);
      pokemon = gen6Pokemons[rand];
      setGen6Pokemons(
        gen6Pokemons.filter((poke) => poke.name !== pokemon.name)
      );
    }

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
  };

  const startGame = () => {
    getPokemon();
    setIsStartShown(false);
    setCardShown(true);
  };

  const genLay = (gen) => {
    if (gen === 1) {
      setPickedGen1(true);
    } else if (gen === 2) {
      setPickedGen2(true);
    } else if (gen === 3) {
      setPickedGen3(true);
    } else if (gen === 4) {
      setPickedGen4(true);
    } else if (gen === 5) {
      setPickedGen5(true);
    } else if (gen === 6) {
      setPickedGen6(true);
    }
    setIsShown(true);
    setIsStartShown(true);
  };

  const reset = () => {
    setScore(0);
    setIsShown(false);
    setCardShown(false);
    setPickedGen1(false);
    setPickedGen2(false);
    setPickedGen3(false);
    setPickedGen4(false);
    setPickedGen5(false);
    setPickedGen6(false);
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
          <GenLayout startGame={genLay} isShown={!isShown} />
        </div>
      )}
      {isStartShown && (
        <div className="start-bttn">
          <Button
            display={"Start"}
            clicked={startGame}
            isShown={isStartShown}
          />
        </div>
      )}
      {isCardShown && <Card pokeImg={pokeImg} isCorrect={isCorrect} />}

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

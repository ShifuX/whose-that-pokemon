import { Header, Card, Input } from "./components";
import { useEffect } from "react";
import headerLogo from "./Assets/pokeLogo.jpg";
import axios from "axios";

function App() {
  const pokemons = [];
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000").then((res) => {
      console.log(res.data);
      for (let e of res.data.results) {
        pokemons.push({ name: e.name, url: e.url });
      }
      console.log(pokemons);
      //getPokemon();
    });
  }, []);

  const getPokemon = () => {
    let rand = Math.floor(Math.random() * pokemons.length - 1);
    let pokemon = pokemons[rand];
    let pokeName = pokemon.name;
    let url = pokemon.url;
    console.log(pokemon); // testing
  };

  return (
    <>
      <Header headerLogo={headerLogo} />
      <Card />
      <Input />
    </>
  );
}

export default App;

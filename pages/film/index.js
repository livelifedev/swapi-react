import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Characters from "../../components/characters";
import Vehicles from "../../components/vehicles";
import Planets from "../../components/planets";
import Starships from "../../components/starships";
import Species from "../../components/species";

const FilmPage = props => {
  const film = props[0];
  const characters = props[1];
  const planets = props[2];
  const starships = props[3];
  const vehicles = props[4];
  const species = props[5];

  return (
    <>
      <h1>{film.title}</h1>
      <h2>Episode {film.episode_id}</h2>
      <p>"{film.opening_crawl}"</p>
      <ul>
        <li>Director: {film.director}</li>
        <li>Producer: {film.producer}</li>
        <li>Release Date: {film.release_date}</li>
      </ul>
      <Characters charList={characters} />
      <Planets plaList={planets} />
      <Starships ssList={starships} />
      <Vehicles vehList={vehicles} />
      <Species specList={species} />
      <Link href="/">
        <a>Back home</a>
      </Link>
    </>
  );
};

FilmPage.getInitialProps = async ({ query }) => {
  const { url } = query;
  const res = await fetch(url);
  const data = await res.json();

  const characters = await Promise.all(
    data.characters.map(async item => {
      const data = await fetch(item);
      return await data.json();
    })
  );

  const planets = await Promise.all(
    data.planets.map(async item => {
      const data = await fetch(item);
      return await data.json();
    })
  );

  const starships = await Promise.all(
    data.starships.map(async item => {
      const data = await fetch(item);
      return await data.json();
    })
  );

  const vehicles = await Promise.all(
    data.vehicles.map(async item => {
      const data = await fetch(item);
      return await data.json();
    })
  );

  const species = await Promise.all(
    data.species.map(async item => {
      const data = await fetch(item);
      return await data.json();
    })
  );

  return [data, characters, planets, starships, vehicles, species];
};

export default FilmPage;

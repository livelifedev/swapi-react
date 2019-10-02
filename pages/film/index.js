import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Characters from "../../components/characters";
import Vehicles from "../../components/vehicles";
import Planets from "../../components/planets";
import Starships from "../../components/starships";
import Species from "../../components/species";

const FilmPage = ({
  data,
  characters,
  planets,
  starships,
  vehicles,
  species
}) => {
  return (
    <>
      <h1>{data.title}</h1>
      <h2>Episode {data.episode_id}</h2>
      <p>"{data.opening_crawl}"</p>
      <ul>
        <li>Director: {data.director}</li>
        <li>Producer: {data.producer}</li>
        <li>Release Date: {data.release_date}</li>
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

  return { data, characters, planets, starships, vehicles, species };
};

export default FilmPage;

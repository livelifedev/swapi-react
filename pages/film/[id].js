import fetch from "isomorphic-unfetch";
// import { useRouter } from "next/router";
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
  // const router = useRouter();
  // const { id } = router.query;
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
  const url = `https://swapi.co/api/films/${query.id}/`;
  const resp = await fetch(url);
  const data = await resp.json();

  if (data.detail === "Not found") {
    const error = new Error("Page does not exist");
    error.statusCode = 404;
    throw error;
    // Change to redirect instead or handle error properly
  }

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

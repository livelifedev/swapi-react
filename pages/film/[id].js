import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Characters from "../../components/characters";
import Vehicles from "../../components/vehicles";
import Planets from "../../components/planets";
import Starships from "../../components/starships";
import Species from "../../components/species";
import Main from "../../styles/main";

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
      <Link href="/">
        <a className="bold">Back home</a>
      </Link>
      <h1>{data.title}</h1>
      <h2>Episode {data.episode_id}</h2>
      <p>"{data.opening_crawl}"</p>
      <ul className="filmCrew">
        <li>
          <span className="bold">Director: </span>
          {data.director}
        </li>
        <li>
          <span className="bold">Producer: </span>
          {data.producer}
        </li>
        <li>
          <span className="bold">Release Date: </span>
          {data.release_date}
        </li>
      </ul>
      <div className="filmDetails">
        <Characters charList={characters} />
        <Planets plaList={planets} />
        <Starships ssList={starships} />
        <Vehicles vehList={vehicles} />
        <Species specList={species} />
      </div>

      <style jsx>{`
        .filmCrew {
          display: flex;
          margin-bottom: 60px;
        }
        .filmCrew li {
          margin-right: 30px;
          letter-spacing: 0;
          list-style: none;
        }
        .bold {
          font-weight: bolder;
        }
        h2 {
          text-decoration: underline;
        }
        .filmDetails {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
      <Main />
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

  // Need to optimize API calls, possibly make one big call and store data in state
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

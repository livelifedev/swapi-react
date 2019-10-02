import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Characters from "../../components/characters";

const FilmPage = props => {
  const film = props[0];
  const characters = props[1];

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

  return [data, characters];
};

export default FilmPage;

import Link from "next/link";
import { sliceFilmId, favClick, unFavClick } from "../components/utils";

const List = ({ films, favs, handleClick, showAlert }) => {
  const list = films.map(film => {
    if (favs.indexOf(film.episode_id) >= 0) {
      return (
        <li key={film.episode_id} className="fav">
          <Link href="/film/[id]" as={`/film/${sliceFilmId(film.url)}`}>
            <a>{film.title}</a>
          </Link>
          <button
            onClick={() => {
              unFavClick(film.episode_id);
              handleClick();
            }}
          >
            Fave
          </button>
        </li>
      );
    } else {
      return (
        <li key={film.episode_id} className="nonfav">
          <Link href="/film/[id]" as={`/film/${sliceFilmId(film.url)}`}>
            <a>{film.title}</a>
          </Link>
          <button
            onClick={() => {
              favClick(film.episode_id);
              showAlert();
              handleClick();
            }}
          >
            Non
          </button>
        </li>
      );
    }
  });
  return list;
};

export default List;

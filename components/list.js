const favClick = id => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  storedFavs.push(id);
  localStorage.setItem("favs", JSON.stringify(storedFavs));
};

const unFavClick = id => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  const index = storedFavs.indexOf(id);
  storedFavs.splice(index, 1);
  localStorage.setItem("favs", JSON.stringify(storedFavs));
};

const List = ({ films, favs, handleClick, showAlert }) => {
  const list = films.map(film => {
    if (favs.indexOf(film.episode_id) >= 0) {
      return (
        <li key={film.episode_id} className="fav">
          {film.title} -{" "}
          <button
            onClick={() => {
              unFavClick(film.episode_id);
              handleClick();
            }}
          >
            unFav
          </button>
        </li>
      );
    } else {
      return (
        <li key={film.episode_id} className="nonfav">
          {film.title} -{" "}
          <button
            onClick={() => {
              favClick(film.episode_id);
              showAlert();
              handleClick();
            }}
          >
            Fav
          </button>
        </li>
      );
    }
  });
  return list;
};

export default List;

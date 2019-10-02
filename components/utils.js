// Grabs the film query id off its URL property
export const sliceFilmId = urlString => urlString.slice(-2, -1);

export const favClick = id => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  storedFavs.push(id);
  localStorage.setItem("favs", JSON.stringify(storedFavs));
};

export const unFavClick = id => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  const index = storedFavs.indexOf(id);
  storedFavs.splice(index, 1);
  localStorage.setItem("favs", JSON.stringify(storedFavs));
};

import fetch from "isomorphic-unfetch";
import Link from "next/link";

const FilmPage = props => {
  const film = props[0];

  return (
    <>
      <h1>Test</h1>
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

  return [data];
};

export default FilmPage;

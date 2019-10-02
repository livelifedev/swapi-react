const main = () => {
  return (
    <style global jsx>{`
      body {
        background-color: #a33327;
        font-family: Verdana, Geneva, sans-serif;
        letter-spacing: 1px;
      }
      h1 {
        font-size: 4rem;
        letter-spacing: 6px;
        color: #170f11;
        text-transform: uppercase;
      }
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      a {
        text-decoration: none;
      }
      a:visited {
        color: inherit;
      }
      a:hover {
        color: #ffffff;
      }
    `}</style>
  );
};

export default main;

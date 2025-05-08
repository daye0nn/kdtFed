import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";

// const ALL_MOVIES = gql`
//   query getMovies {
//     allMovies {
//       id
//       title
//     }
//   }
// `;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              id
              title
            }
          }
        `,
      })
      .then((results) => setMovies(results.data.allMovies));
  }, [client]);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Home;

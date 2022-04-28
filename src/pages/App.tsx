import React from "react";
import "../styles/App.css";
import { useQuery, gql } from "@apollo/client";
import Login from "../components/login";
import { AUTH_TOKEN } from "../constants";

const HELLO = gql`
  query getAllPosts {
    getAllPosts {
      id
      title
      author {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (localStorage.getItem(AUTH_TOKEN)) {
    return (
      <div className="App">
        <Login />
        {data.getAllPosts.map((dog) => (
          <div key={dog.id}>
            {dog.title}: {dog.author.name}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="App">
        <Login />
        This shows when you are not signed in
      </div>
    );
  }
}

export default App;

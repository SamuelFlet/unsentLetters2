import React from "react";
import "../styles/App.css";
import { useQuery, gql } from "@apollo/client";
import Login from '../components/login';

const HELLO = gql`
  query getAllPosts{
  getAllPosts{
    title
    author{
      name
    }
  }
}
`;

function App() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <Login/>
      {data.getAllPosts.map(dog => (
        <div key={dog.title}>
          {dog.title}: {dog.author.name}
        </div>
      ))}
    </div>
  );
}

export default App;

import React from "react";
import "../styles/App.css";
import { useQuery, gql } from "@apollo/client";

const HELLO = gql`
  query Hello {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data.hello}
    </div>
  );
}

export default App;

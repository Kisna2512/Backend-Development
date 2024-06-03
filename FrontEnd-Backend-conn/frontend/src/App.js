import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>krishna kotgire</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

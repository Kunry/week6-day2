import logo from './logo.svg';
import './App.css';
import User from './components/User';
import { useState } from 'react';
import movies from './movies-data.json';
import ListMovies from './components/ListMovies';
import OnChange from './components/OnChange';

function App() {
  const user = {
    name: 'Pepe',
    age: 128,
    address: 'Calle Falsa, 123',
  };
  const [isLoading, setIsLoadgin] = useState(false);
  const [style, setStyle] = useState('white');

  return (
    <div className={`App ${style}`}>
      <User newContact={user} isLoading={isLoading} />
      {!isLoading ? (
        <button onClick={() => setIsLoadgin(true)}>Load</button>
      ) : null}
      <ListMovies movies={movies} />
      <OnChange />
      <button
        onClick={() => {
          if (style === 'white') setStyle('black');
          else setStyle('white');
        }}
      >
        Change style background
      </button>
    </div>
  );
}

export default App;

import './App.css'
import React from 'react';
// custom hooks
import { useMode } from './hooks/setHooks';

// pages
import MovieList from './components/MoviesDisplay';

function App() {
  const [mode, setMode] = useMode('list');
  
  React.useEffect(()=> {
    console.log(mode);
  }, [mode]);
  
  return (
    <>
      <main>
        <select  onChange={setMode}>
          <option value="list">List Mode</option>
          <option value="grid">Grid Mode</option>
        </select>
        {mode === 'list' ? <MovieList /> : <p>Ini grid</p>}
      </main>
    </>
  )
}

export default App

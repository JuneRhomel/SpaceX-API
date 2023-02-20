
import { useEffect, useState } from 'react';
import './assets/style/style.css';
import Main from './components/Main';
import { DataContext } from './Contexts/DataContext';

function App() {
  const PAGE_NUMBER = 1
  const [data, setData] = useState(null);
  const [page, setPage] = useState(PAGE_NUMBER);




  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches?page=${page}&size=5`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);  return (

    <div className="App">
      <DataContext.Provider value={data}>
      <Main/>
      </DataContext.Provider>
    </div>
  );
}

export default App;

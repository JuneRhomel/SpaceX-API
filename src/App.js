
import { useEffect, useState } from 'react';
import './assets/style/style.css';
import Main from './components/Main';
import { DataContext } from './Contexts/DataContext';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);  
  return (

    <div className="App">
      <DataContext.Provider value={data}>
      <Main/>
      </DataContext.Provider>
    </div>
  );
}

export default App;

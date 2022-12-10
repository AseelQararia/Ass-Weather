import React, {useState, useEffect}  from "react";
import './App.scss'
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
 
function App() {
  const [data, setD] = useState({});

  return (
    <div className="app">

      <header className="app__header">
        <Header setD={setD}/>
      </header>

      <main className="app__main">
      <Main data={data} />
      </main>

    </div>
  );
}


export default App;

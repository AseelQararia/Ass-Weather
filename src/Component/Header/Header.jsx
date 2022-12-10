import React, {useState, useEffect}  from "react";
import axios from "axios";
import "./Header.scss";

function Header ({SD}){
  const [Wdata, setWdata] = useState({});
  const [pos, setPos] = useState("");


  function getPos(e) {
    setPos(e.target.value);
  }

  function showD(e) {
    e.preventDefault();
    getD(pos);
  }

  function NameP(word) {
    let word1 = word.toLowerCase();
    let newWord = word1.charAt(0).toUpperCase() + word1.slice(1);
    return  newWord;
  }

  const getD = async (pos) => {
    let position = NameP(pos);
    let apiR = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${position}&cnt=8&units=metric&appid=7978bd37eb6b8463cc06ca35e9166f7a`);

    if (apiR.status === 200) {
      let data = apiR.data;
       setWdata(data);
      if(typeof SD =="function"){
        SD(data);
      }
    }
  };



  return (
    <>
      <div className="backG">
        <div className="container-fluid">
          <div className="" id="">
            <form className="d-flex" role="search" onSubmit={showD}>
              <input className="inputB" onChange={getPos} type="search" placeholder="Type in a city name" />
              <button className="DoneB" type="submit"> FIND WEATHER </button>
            </form>
          </div>
        </div>
      </div>
      </> 

  );



}

export default Header;

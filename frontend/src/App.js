// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    name: "",
    wins: 0,
    CuP: 0,
    First: 0,
    Winner: "",
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((dataf) => {
          // Setting a data from api
          setdata({
            name: dataf.Name,
            age: dataf.Age,
            date: dataf.Date,
            programming: dataf.programming,
          });
        })
    );
  }, []);


  return (
      <div className="App">
        <header className="App-header">
          <h1>React and flask</h1>
          {/* Calling a data from setdata for showing */}
          <p1>{data.name}</p1>
          <p2>{data.age}</p2>
          <p3>{data.date}</p3>
          <p4>{data.programming}</p4>
            <Button/>

        </header>
      </div>
  );
}

function Button() {
    const [foo, setVar] = useState("unclicked");

    function handleClick(){
        setVar("clicked");
    }
    return (
        <button onClick={handleClick}>
            {foo}
        </button>
    );
}

export default App;
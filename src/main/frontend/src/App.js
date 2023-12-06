import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import './App.css';

function App() {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/api/demo-web")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessage(data);
            });
    }, []);

  return (
    <div className="App">
        {message}
        <a href="/link">link</a>
    </div>
  );
}

export default App;

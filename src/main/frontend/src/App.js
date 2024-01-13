import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Main, Room } from "./pages/";

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
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/room" element={<Room />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;

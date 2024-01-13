import React, {useState, useEffect} from 'react';

function Main() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/api/time/getNow')
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
    }, [])

    return (
        <div>
            <p>Hi, WelCome to GameChat!</p>
            <h2> {message} </h2>
            <a href="{() => false}">Move to Link</a>
        </div>
    );
}

export default Main;
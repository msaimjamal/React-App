import React, { useEffect, useState } from "react";

const PlayersContext = React.createContext({
    players: [], fetchPlayers: () => {}
})

export default function Players() {
    const [players, setPlayers] = useState([])

    const fetchPlayers = async () => {
        /*const response = await fetch("/")
        const players = await response.json()
        setPlayers(players.data)*/
        fetch("/playershome").then((res) =>
            res.json().then((data) => {
                setPlayers(data.people);
            }));
    };

    useEffect(() => {
        fetchPlayers()
    }, [])

    const listPlayers = players.map((player) => (
            <li key={player.Name}>{player.Name}</li>
        ));

    return(
        <PlayersContext.Provider value={{players, fetchPlayers}}>
            <h1>Playerlist</h1>
            {listPlayers}
            <hr />
            <RegisterPlayer/>
        </PlayersContext.Provider>
    );
}

function AddPlayer() {
    const [name, setName] = React.useState("")
    const {players, fetchPlayers} = React.useContext(PlayersContext)
}
function RegisterPlayer() {

    const [newPlayer, setNewPlayer] = useState()
    function handleChange(event){
        setNewPlayer({
            'Name': event.target.value,
            'Wins': 0,
            'CuP': 0,
            'First': 0
        })
/*
        fetch('/players', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlayer)})*/
    }

    function handleRegister (input){
        fetch('/playersadd', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlayer)})
    }

    return(
        <form method="post" onSubmit={handleRegister}>
            <label>
                Register Here: <input type="text" defaultValue="Name"
            onChange={handleChange}/>
            </label>
            <button>
                Enter
            </button>
        </form>

    );
}
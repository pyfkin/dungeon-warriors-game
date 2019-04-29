class HighestScore
{
    getPlayerList()
    {
        return fetch('http://localhost:3005/playerList')
            .then((res) => res.json())
    }

    addResultToDB(data)
    {
        return fetch('http://localhost:3005/playerList', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
    }
}

export default new HighestScore();
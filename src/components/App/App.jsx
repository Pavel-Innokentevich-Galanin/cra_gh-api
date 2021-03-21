function App() {
    console.log(process.env);

    let url = `https://api.github.com/users/Pavel-Innokentevich-Galanin`;

    fetch(url, {
        "method": "GET",
        "headers": {
            "Authorization": `Token ${process.env.REACT_APP__GH_token}`
        }
    })
        .then(response => response.json())
        .then(data => console.log(data));

    return (
        <div className="App">
            Hello, world!
        </div>
    );
}

export default App;

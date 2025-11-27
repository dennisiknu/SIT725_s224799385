const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/basketball-facts", (req, res) => {
    const facts = [
        { id: 1, text: "A standard basketball hoop is 10 feet high." },
        { id: 2, text: "An official basketball game has 4 quarters, with each quarter being 12 minute long." },
        { id: 3, text: "Each team has 5 players on the court at any given time." },
        { id: 4, text: "The five positions in basketball are  point guard, shooting guard, small forward, power forward and center." }
    ];
    res.json(facts);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App listening on port " + port);
});

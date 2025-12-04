const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoUrl = "mongodb://localhost:27017/basketballDB";

mongoose
    .connect(mongoUrl)
    .then(() => console.log("✅ Connected to MongoDB (basketballDB)"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

const PositionSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Position = mongoose.model("Position", PositionSchema);

const FactSchema = new mongoose.Schema({
    text: String,
});

const Fact = mongoose.model("Fact", FactSchema);


app.get("/api/positions", async (req, res) => {
    try {
        const positions = await Position.find({});
        res.json({
            statusCode: 200,
            data: positions,
            message: "Success",
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: "Error fetching positions",
        });
    }
});

app.get("/api/basketball-facts", async (req, res) => {
    try {
        const facts = await Fact.find({});
        res.json({
            statusCode: 200,
            data: facts,
            message: "Success",
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: "Error fetching facts",
        });
    }
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

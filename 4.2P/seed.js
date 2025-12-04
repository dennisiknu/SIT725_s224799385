const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/basketballDB";

mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log("✅ Connected to MongoDB for seeding");
        seedData();
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error (seeding):", err);
    });


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

const positionData = [
    {
        title: "Point Guard",
        image: "images/stephcurry.png",
        link: "Learn about point guards",
        description: "Usually the primary ball handler and playmaker.",
    },
    {
        title: "Shooting Guard",
        image: "images/skobe.png",
        link: "Learn about shooting guards",
        description: "Often the best perimeter shooter on the team.",
    },
    {
        title: "Center",
        image: "images/shaq.png",
        link: "Learn about centers",
        description: "Tallest players who protect the paint and rebound.",
    },
];

const factData = [
    { text: "The three-point line was introduced to the NBA in 1979." },
    { text: "Each team has five players on the court at a time." },
    { text: "An NBA game is 48 minutes long, split into four quarters." },
];


async function seedData() {
    try {
        await Position.deleteMany({});
        await Fact.deleteMany({});

        await Position.insertMany(positionData);
        console.log("✅ Positions seeded");

        await Fact.insertMany(factData);
        console.log("✅ Facts seeded");

        mongoose.connection.close();
    } catch (err) {
        console.error("❌ Seeding error:", err);
        mongoose.connection.close();
    }
}

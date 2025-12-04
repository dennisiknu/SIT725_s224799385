const cardList = [
    {
        title: "Point Guard",
        image: "images/stephcurry.png",
        link: "Learn about point guards",
        description: "Usually the primary ball handler and playmaker."
    },
    {
        title: "Shooting Guard",
        image: "images/kobe.png",
        link: "Learn about shooting guards",
        description: "Often the best perimeter shooter on the team."
    },
    {
        title: "Center",
        image: "images/shaq.png",
        link: "Learn about centers",
        description: "Controls the paint, rebounds and protects the rim."
    }
];

const addCards = (items) => {
    items.forEach(item => {
        const itemToAppend =
            '<div class="col s12 m4">' +
            '<div class="card medium">' +
            '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + item.image + '" alt="' + item.title + '">' +
            '</div>' +
            '<div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' +
            item.title +
            '<i class="material-icons right">more_vert</i>' +
            '</span>' +
            '<p><a href="#">' + item.link + '</a></p>' +
            '</div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' +
            item.title +
            '<i class="material-icons right">close</i>' +
            '</span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';

        $("#card-section").append(itemToAppend);
    });
};

const loadFacts = () => {
    fetch("/api/basketball-facts")
        .then(res => res.json())
        .then(facts => {
            facts.forEach(fact => {
                $("#facts-list").append(
                    '<li class="collection-item">' + fact.text + '</li>'
                );
            });
        })
        .catch(err => {
            console.error("Error loading facts:", err);
        });
};

function setupPlayerSubmit() {
    $("#save-player").click(function () {

        const name = $("#user-name").val().trim();
        const email = $("#user-email").val().trim();
        const player = $("#player-name").val().trim();

        if (!name || !email || !player) return;

        $("#players-list").append(`
            <li class="collection-item">
                <strong>${name}</strong> — Favourite Player:
                <strong>${player}</strong>
            </li>
        `);

        $("#player-form")[0].reset();
    });
}

// Run once DOM is ready
$(document).ready(function () {
    // IMPORTANT: initialise Materialize modal
    $('.modal').modal();

    addCards(cardList);
    loadFacts();
    setupPlayerSubmit();
});

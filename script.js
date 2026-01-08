console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn = document.querySelector("#apollo-btn");
const nebulaBtn = document.querySelector("#nebula-btn");
const cometBtn = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket");

// Click Handlers
const boostApollo = (e) => {
    apollo_spot += 1;
    moveTo(apolloRocket, apollo_spot);
    winnerBox(apollo_spot, "apollo");
};

const boostNebula = (e) => {
    nebula_spot += 1;
    moveTo(nebulaRocket, nebula_spot);
    winnerBox(nebula_spot, "nebula");
};

const boostComet = (e) => {
    comet_spot += 1;
    moveTo(cometRocket, comet_spot);
    winnerBox(comet_spot, "comet");
};

// Winner Check

const winnerBox = (spot, rocket) => {
    if (spot > 6) {
        document.getElementById("winner").innerHTML = `<h2>The winner is ${rocket} rocket!</h2>`;
    }
}

// Events
apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);


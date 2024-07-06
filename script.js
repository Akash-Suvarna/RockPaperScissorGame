let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let winnerIs = document.querySelector("#win");
let uScore = document.querySelector('#userScore');
let cScore = document.querySelector('#compScore');

const drawGame = () => {
    winnerIs.innerText = "It's a Draw";
    winnerIs.style.backgroundColor = "blue";
}

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        uScore.innerText = userScore; 
        winnerIs.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        winnerIs.style.backgroundColor = "green";
    } else {
        compScore++; 
        cScore.innerText = compScore; 
        winnerIs.innerText = `You Lost! Computer's ${compChoice} beats Your ${userChoice}`;
        winnerIs.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            userWin = compChoice !== "scissor";
        } else {
            userWin = compChoice !== "rock";
        }
        showWin(userWin, userChoice, compChoice);
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

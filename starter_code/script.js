// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    
    var gArray = ["rock", "Paper", "Scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.
   var v =     Math.floor((Math.random() * 3) + 0);
;
    console.log(v)
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum])
    var value = gArray[v]
    return value
    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if( userChoice == "rock" && computerChoice == "Paper"){
        console.log("Computer wins");
        $("#computer-choice").html(computerChoice);
        $("#winer").html("Computer");
    } else if( userChoice == computerChoice){
        console.log("DRAW");
        $("#computer-choice").html(computerChoice);
        $("#winer").html("DRAW");    
    } else if( userChoice == "rock" && computerChoice == "Scissors"){
        console.log("User Wins");
        $("#computer-choice").html(computerChoice);
        $("#winer").html("User Wins");   
    } else if( userChoice == "paper" && computerChoice == "rock"){
        console.log("User Wins");
        $("#computer-choice").html(computerChoice);
        $("#winer").html("User Wins");   
    } else if( userChoice == "paper" && computerChoice == "Scissors"){
        console.log("Computer Wins");
        $("#computer-choice").html(computerChoice);
        $("#winer").html("Computer wins");   
    }else if( userChoice == "Scissors" && computerChoice == "rock"){
        console.log("computer wins");
        $("#computer-choice").html(computerChoice);
        $("#winer").html("computer wins"); 
    }else if( userChoice == "Scissors" && computerChoice == "Paper"){
        console.log("User wins");

    }
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = null;

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = null;
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.
$("#rock").click(function() {
    userChoice = "rock";
        computerChoice = generateComputerChoice();
        $("#winer").html(pickWinner(userChoice, computerChoice)); 
        
});
$("#paper").click(function() {
    userChoice = "paper";
    computerChoice = generateComputerChoice();
    pickWinner()
         
                $("#winer").html(pickWinner(userChoice, computerChoice)); 
});
$("#scissors").click(function() {
    userChoice = "scissors";
    computerChoice = generateComputerChoice();
        $("#winer").html(pickWinner(userChoice, computerChoice)); 
    
});
    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
   pickWinner(userChoice, computerChoice);

});
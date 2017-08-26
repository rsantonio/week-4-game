$(document).ready(function() {

//variables for stats
var twins = 0;
var tLosses = 0;
var userScore = 0;

//appending values of stats to html doc
$("#spanWins").text(twins);
$("#spanLoss").text(tLosses);

//random number values for the number the user has to guess
var randomNumber = parseInt(Math.floor(Math.random()* 100) + 19);

$("#spanChoosenNumber").text(randomNumber);

//values of the different gems
var gem1 = parseInt(Math.floor(Math.random()*12)+ 1);
var gem2 = parseInt(Math.floor(Math.random()*12)+ 1);
var gem3 = parseInt(Math.floor(Math.random()*12)+ 1);
var gem4 = parseInt(Math.floor(Math.random()*12)+ 1);

function gameReset() {
	userScore = 0;

	$("#spanScore").text(userScore);

	randomNumber = parseInt(Math.floor(Math.random()* 100) + 19);

	$("#spanChoosenNumber").text(randomNumber);

	var gem1 = parseInt(Math.floor(Math.random()*12)+ 1);
	var gem2 = parseInt(Math.floor(Math.random()*12)+ 1);
	var gem3 = parseInt(Math.floor(Math.random()*12)+ 1);
	var gem4 = parseInt(Math.floor(Math.random()*12)+ 1);

	}

function gameWon () {
	$("#gameStatus").text("Winner!");
	twins++;
	$("#spanWins").text(twins);
	}

function gameLost () {
	$("gameStatus").text("Loser!");
	tLosses++;
	$("#spanLoss").text(tLosses);
	}
//on click events

$(".image").on("click",function() {
	if($(this).attr("class") === "image") {
		if ($(this).attr("id") === "gem1") {
			userScore = parseInt(userScore) + parseInt(gem1);
		}
		if ($(this).attr("id") === "gem2") {
		userScore = parseInt(userScore) + parseInt(gem2);
		}
		if ($(this).attr("id") === "gem3") {
		userScore = parseInt(userScore) + parseInt(gem3);
		}
		if ($(this).attr("id") === "gem4") {
		userScore = parseInt(userScore) + parseInt(gem4);
		}
	}

	$("#spanScore").text(userScore);

	if (userScore === randomNumber) {
		gameWon();
		gameReset();	

	} else if (userScore >= randomNumber) {
		gameLost();
		gameReset();	

	}

	});

});








 


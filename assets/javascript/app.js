$(document).ready(function() {

var correct = 0;
var wrong = 0;
var timeremaining = 60;
var options;
var answer;

var buttonA1El = $("#buttonA1");
var buttonA2El = $("#buttonA2");
var buttonA3El = $("#buttonA3");
var buttonA4El = $("#buttonA4");

var buttonsArray = [buttonA1El, buttonA2El, buttonA3El, buttonA4El];
var time = 0;
var running = 0;

var questionArray = [ 
{
	Q1: {
		question: "During the Inglorious Bastards famous card scene, what fictional character is written on Hellstrom's card?",
		options: ["King Kong", "2", "3", "4"],
		answer: "King Kong",
		},
	},
	{
    Q2: {
		question: "Which Tarantino movie was really only half of a movie, the other half being directed by Robert Rodriguez",
		options: ["Death Proof", "2", "3", "4"],
		answer: "Death Proof",
		},
	},
	{
	Q3: {
		question: "Which was Tarantino's first movie to not feature the word ‘fuck’ at least 100 times? Hint: It clocked in with only 17 uses.",
		options: ["1", "2", "Kill Bill Vol. 1", "4"],
		answer: "Kill Bill Vol. 1",
		},
	},
	{
	Q4: {
		question: "Which Actor is featured in more Tarintino movies?",
		options: ["Samuel L. Jackson", "Harvey Keitel"],
		answer: "Samuel L. Jackson",
		},
	},
	{
	Q5: {
		question: "True or False: Steve Buscemi plays Mr. Pink in Reservoir Dogs.",
		options: ["True", "False"],
		answer: "True",
		},
	},
	{
	Q6: {
		question: "During the Inglorious Bastards famous card scene, what fictional character is written on Hellstrom's card?",
		options: ["King Kong", "2", "3", "4"],
		answer: "King Kong",
		},
	},
	{
	Q7: {
		question: "During the Inglorious Bastards famous card scene, what fictional character is written on Hellstrom's card?",
		options: ["King Kong", "2", "3", "4"],
		answer: "King Kong",
		},
	},
	{
	Q8: {
		question: "During the Inglorious Bastards famous card scene, what fictional character is written on Hellstrom's card?",
		options: ["King Kong", "2", "3", "4"],
		answer: "King Kong",
		},
	},
	{
	Q9: {
		question: "During the Inglorious Bastards famous card scene, what fictional character is written on Hellstrom's card?",
		options: ["King Kong", "2", "3", "4"],
		answer: "King Kong",
		},
	},
	{
	Q10: {
		question: "During the Inglorious Bastards famous card scene, what fictional character is written on Hellstrom's card?",
		options: ["King Kong", "2", "3", "4"],
		answer: "King Kong",
		},
	},
];

	function buttonCollector() {
		for (var i = 0; i < options.length; i+=1) {
		console.log(buttonsArray[i])
		buttonsArray[i].html(options[i]);
		}
	}
	function startGame() {
		var test=loadQuestion("Q1")
		console.log(test)
		$("#question1").text(test);
		buttonCollector();
	}
	
	function loadQuestion (questionNumber) {
		for (var i = 0; i < questionArray.length; i+=1) {
			console.log("question")
		if (questionArray[i][questionNumber]) {
			var question=questionArray[i][questionNumber].question
			options=questionArray[i][questionNumber].options
			answer=questionArray[i][questionNumber].answer
			return question
			}
		}
	};
	
	$("#start").click(function(){
		startGame();

		function startTimer(duration, display) {
    		var timeremaining = duration, minutes, seconds;
    		setInterval(function () {
        		minutes = parseInt(timeremaining / 60, 10);
        		seconds = parseInt(timeremaining % 60, 10);

        		minutes = minutes < 10 ? "0" + minutes : minutes;
        		seconds = seconds < 10 ? "0" + seconds : seconds;

        		display.text(minutes + ":" + seconds);

        if (--timeremaining < 0) {
            timeremaining = duration;
        	}
    		}, 1000);
		}

		jQuery(function ($) {
    		var oneMinutes = 60 * 1,
        	display = $('#timeremaining');
    	startTimer(oneMinutes, display);
		});

		var A1hasBeenClicked = false;
		(buttonA1El).click(function () {
	    A1hasBeenClicked = true;
		});
		
		var A2hasBeenClicked = false;
		(buttonA2El).click(function () {
	    A2hasBeenClicked = true;
		});
		var A3hasBeenClicked = false;
		(buttonA3El).click(function () {
	    A3hasBeenClicked = true;
		});
		var A4hasBeenClicked = false;
		(buttonA4El).click(function () {
	    A4hasBeenClicked = true;
		});

		(buttonsArray[0]).click(function() {
			console.log("WOWWWWWWWWWW");
		})
		if (A1hasBeenClicked) {
		
		} else {
		$("#buttonA1").click(function(){
		correct++;
		$("#correct").html(correct);
		console.log(correct);
		// $("#question1").html(questionArray[2].question);
		
		})
		
		}
		if (A2hasBeenClicked) {
		
		} else {
			$("#buttonA2").click(function(){
		wrong++;
		$("#wrong").html(wrong);
		console.log(wrong);
		})
		}
		if (A3hasBeenClicked) {
		
		} else {
			$("#buttonA3").click(function(){
		wrong++;
		$("#wrong").html(wrong);
		console.log(wrong);
		})
		}
		if (A4hasBeenClicked) {
		
		} else {
			$("#buttonA4").click(function(){
		wrong++;
		$("#wrong").html(wrong);
		console.log(wrong);
		})
	}
	});

	function stopGame() {
		if (timeremaining == 0) {
			console.log("Time Out");
		} 
	}


		// $("#buttonA1").click(function(){
		// correct++;
		// $("#correct").html(correct);
		// console.log(correct);
		// })

});
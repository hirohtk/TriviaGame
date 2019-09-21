var questionSet = {

    question1: "What Is The Boiling Point Of Water In Fahrenheit?",
    q1Options: {
        firstQuestion: function () {
            timeStart();

            console.log(questionSet.question1);
            $(".currentQuestion").text(questionSet.question1);
            $(".answer1").text(questionSet.q1Options.q1O1);
            $(".answer2").text(questionSet.q1Options.q1O2);
            $(".answer3").text(questionSet.q1Options.q1O3);
            $(".answer4").text(questionSet.q1Options.q1O4);
            $(".answer1").one("click", wrong);
            $(".answer2").one("click", wrong);
            $(".answer3").one("click", correct);
            $(".answer4").one("click", wrong);

        },
        correct: function () {
            console.log("correct!");
            hideAnswers();
            correctAnswers++;
            $(".rightAnswer").text("Correct!");
            $(".rightAnswer").append("<p>" + this.answer + "</p>")
            stopTimer();
            $(".timeRemaining").addClass("emptySpace");
        },

        wrong: function () {
            console.log("wrong!");
            hideAnswers();
            wrongAnswers++;
            $(".rightAnswer").text("Incorrect");
            $(".rightAnswer").append("<p> Correct answer is" + " " + this.answer + "</p>");
            stopTimer();
            $(".timeRemaining").addClass("emptySpace");
        },
        timeUp: function() {
            wrongAnswers++;
        $(".rightAnswer").text("Times up!");
        $(".rightAnswer").append("<p> Correct answer is" + " " + this.answer + "</p>");
        },
        q1O1: "100 Degrees",
        q1O2: "188 Degrees",
        q1O3: "212 Degrees",
        q1O4: "240 Degrees",
        answer: "212 Degrees",
    },

    question2: "What Is The Most Common Metal On Earth?",
    q2Options: {
        q2O1: "Iron",
        q2O2: "Copper",
        q2O3: "Aluminum",
        q2O4: "Nickel",
        answer: "Aluminum",
    },

    question3: "Which Bird Has The Best Sense Of Smell?",
    q3Options: {
        q3O1: "Bald Eagle",
        q3O2: "Barn Owl",
        q3O3: "Turkey Vulture",
        q3O4: "Crow",
        answer: "Turkey Vulture",
    },

    question4: "Bees must collect nectar from approximately how many flowers to make 1 pound of honeycomb?",
    q4Options: {
        q4O1: "10 thousand",
        q4O2: "2 million",
        q4O3: "20 million",
        q4O4: "50 million",
        answer: "20 million",
    },

    question5: "The only species of cat that lives and hunts in groups is:",
    q5Options: {
        q5O1: "lion",
        q5O2: "leopard",
        q5O3: "jaguar",
        q5O4: "cougar",
        answer: "lion",
    },

    question6: "Where is the sea of Tranquility?",
    q6Options: {
        q6O1: "Atlantic Ocean",
        q6O2: "On the moon",
        q6O3: "Greece",
        q6O4: "Indian Ocean",
        answer: "On the moon",
    },
    //question7: "Which dwarf planet is closest to the Sun?",
    //question8: "What is the second longest bone in the human body?"
}



var correctAnswers;
var wrongAnswers;
var unanswered;

var timer = 5;

var outOfTime = "Out of Time!";
var incorrect = "Incorrect";
var correct = "Correct!"

var intervalId;


    function hideAnswers() {
        $(".answer1").unbind("click");
        $(".answer2").unbind("click");
        $(".answer3").unbind("click");
        $(".answer4").unbind("click");
        $(".answer1").addClass("hidden");
        $(".answer2").addClass("hidden");
        $(".answer3").addClass("hidden");
        $(".answer4").addClass("hidden");
    }




    function timeStart() {
        intervalId = setInterval(decrement, 1000); // setting interval.  every 1 second, perform decrements 
    }

    function decrement() {

        timer--; // take one second off from timer

        $(".timeLeft").text(timer); // update timer

        if (timer === 0) {

            stopTimer(); // stop the timer function

            timeUp(); // go to loss scenario and reveal answer
        }
    }

    function stopTimer() {

        clearInterval(intervalId);  // emptys cubbyhole, remove setInterval
    }


    function timeUp() {
        //
    }

    function initialize() {
        $(".game").removeClass("hidden");
        $(".refresh").addClass("hidden");
        $(".start").addClass("hidden");
        $(".startButton").unbind("click");

        // TEMPORARY COMMENT questionOne();
        questionSet.q1Options.firstQuestion();
    }

    function correct() {
        //
    }
    function wrong() {
        //
    }

    function questionOne() {

        //

        /*for (var i = 0; i < 7; i++) (function (i) {
            console.log(questionSet.question[i]);
            $(".currentQuestion").text(questionSet.question[i]);
            $(".answer1").text(q[i]Options.q1O1);
            $(".answer2").text(q[i]Options.q1O2);
            $(".answer3").text(q1Options.q1O3);
            $(".answer4").text(q1Options.q1O4);
        } (i));*/
    }


    function gameStart() {
        $(".game").addClass("hidden");
        $(".refresh").addClass("hidden");
        $(".startButton").one("click", initialize);
    }

    gameStart();




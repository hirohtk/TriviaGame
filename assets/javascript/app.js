var questionSet = {

    question1: "What Is The Boiling Point Of Water In Fahrenheit?",
    q1Options: ["100 Degrees", "188 Degrees", "212 Degrees", "240 Degrees", "212 Degrees"],

    question2: "What Is The Most Common Metal On Earth?",
    q2Options: ["Iron", "Copper", "Aluminum", "Nickel", "Aluminum"],

    question3: "Which Bird Has The Best Sense Of Smell?",
    q3Options: ["Bald Eagle", "Turkey Vulture", "Barn Owl", "Crow", "Turkey Vulture"],

    question4: "Bees must collect nectar from approximately how many flowers to make 1 pound of honeycomb?",
    q4Options: ["10 thousand", "2 million", "5 million", "20 million", "20 million"],

    question5: "The only species of cat that lives and hunts in groups is:",
    q5Options: ["Lion", "Leopard", "Jaguar", "Cougar", "Lion"],

    question6: "Where is the sea of Tranquility?",
    q6Options: ["Atlantic Ocean", "On the Moon", "Greece", "Indian Ocean", "On the Moon"],
    //question7: "Which dwarf planet is closest to the Sun?",
    //question8: "What is the second longest bone in the human body?"
}

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

var timer = 10;

var outOfTime = "Out of Time!";
var incorrect = "Incorrect";
var correct = "Correct!"

var currentQuestionNumber = 1;
var currentAnswer;

var doneWithQuestion;



$(document).ready(function () {

    function hideAnswers() {
        $(".answer1").unbind("click");
        $(".answer2").unbind("click");
        $(".answer3").unbind("click");
        $(".answer4").unbind("click");
        $(".answers").addClass("hidden");
    }

    function showAnswers() {
        $(".answers").removeClass("hidden");
    }

    function getCurrentAnswer() {
        if (currentQuestionNumber === 1) {
            currentAnswer = questionSet.q1Options[4];
        }
        else if (currentQuestionNumber === 2) {
            currentAnswer = questionSet.q2Options[4];
        }
        else if (currentQuestionNumber === 3) {
            currentAnswer = questionSet.q3Options[4];
        }
        else if (currentQuestionNumber === 4) {
            currentAnswer = questionSet.q4Options[4];
        }
        else if (currentQuestionNumber === 5) {
            currentAnswer = questionSet.q5Options[4];
        }
        else {
            currentAnswer = questionSet.q6Options[4];
        }
    }


    function timeStart() {
        intervalId = setInterval(decrement, 1000); // setting interval.  every 1 second, perform decrements 
        console.log("timer STARTING");

    }

    function decrement() {

        timer--; // take one second off from timer

        $(".timeLeft").text(timer); // update timer
        console.log("SECOND ELAPSED / TIMER DECREMENTED");

        if (timer === 0) {

            stopTimer(); // stop the timer function

            timeUp(); // go to loss scenario and reveal answer
        }
    }

    function stopTimer() {

        clearInterval(intervalId);  // emptys cubbyhole, remove setInterval
        console.log("timer STOPPING");
    }

    function initialize() {
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        currentQuestionNumber = 1;
        $(".game").removeClass("hidden");
        $(".refresh").addClass("hidden");
        $(".start").addClass("hidden");
        $(".refreshButton").unbind("click");
        $(".startButton").unbind("click");
        $(".question").removeClass("hidden");
        $(".correctAnswer").removeClass("hidden");
        $(".answers").removeClass("hidden");
        $(".timeRemaining").removeClass("hidden");

        questionOne();


        //questionSet.q1Options.firstQuestion();
    }

    function endOfGame() {
        $(".refresh").removeClass("hidden");
        $(".timeRemaining").addClass("hidden");
        $(".question").addClass("hidden");
        $(".correctAnswer").addClass("hidden");
        $(".answers").addClass("hidden");
        $(".correctPicture").addClass("hidden");
        $(".correctAnswers").text("You answered" + " " + correctAnswers + " " + "questions correctly!");
        $(".wrongAnswers").text("You answered" + " " + wrongAnswers + " " + "questions wrong.");
        $(".unanswered").text("Number of questions you didn't answer was:" + " " + unanswered);
        $(".refreshButton").one("click", initialize);

    }

    function goToNextQuestion() {
        if (doneWithQuestion === true) {
            $(".correctPicture").removeClass("hidden");

            console.log("going to next question");
            if (currentQuestionNumber === 2) {
                $(".answerPicture").attr("src", "assets/images/water.gif");
                $(".answerPicture").addClass("gifs");
                setTimeout(questionTwo, 3000);
            }
            else if (currentQuestionNumber === 3) {
                $(".answerPicture").attr("src", "assets/images/aluminum.gif");
                $(".answerPicture").addClass("gifs");
                setTimeout(questionThree, 3000);
            }
            else if (currentQuestionNumber === 4) {
                $(".answerPicture").attr("src", "assets/images/vulture.gif");
                $(".answerPicture").addClass("gifs");
                setTimeout(questionFour, 3000);
            }
            else if (currentQuestionNumber === 5) {
                $(".answerPicture").attr("src", "assets/images/bees.gif");
                $(".answerPicture").addClass("gifs");
                setTimeout(questionFive, 3000);
            }
            else if (currentQuestionNumber === 6) {
                $(".answerPicture").attr("src", "assets/images/lion.gif");
                $(".answerPicture").addClass("gifs");
                setTimeout(questionSix, 3000);
            }
            else if (currentQuestionNumber === 7) {
                $(".answerPicture").attr("src", "assets/images/moon.gif");
                $(".answerPicture").addClass("gifs");
                setTimeout(endOfGame, 3000);

            }

        }
    }

    function cleanUpAfterSelection() {
        hideAnswers();
        stopTimer();
        $(".timeRemaining").addClass("emptySpace");
        doneWithQuestion = true;
        currentQuestionNumber++;
        goToNextQuestion();
    }

    function correct() {
        console.log("correct!");
        correctAnswers++;
        console.log("You answered" + " " + correctAnswers + " " + "questions correctly!");
        $(".rightAnswer").removeClass("hidden");
        $(".rightAnswer").text("Correct!");
        $(".rightAnswer").append("<p>" + currentAnswer + "</p>")
        $(".rightAnswer").attr("style", 'color:green');
        cleanUpAfterSelection();

    }
    function wrong() {
        console.log("wrong!");
        wrongAnswers++;
        console.log("You answered" + " " + wrongAnswers + " " + "wrong.");
        $(".rightAnswer").removeClass("hidden");
        $(".rightAnswer").text("Incorrect");
        $(".rightAnswer").append("<p> Correct answer is" + " " + currentAnswer + "</p>");
        $(".rightAnswer").attr("style", 'color:red');
        cleanUpAfterSelection();
    }

    function timeUp() {
        unanswered++;
        console.log("You didn't answer" + " " + unanswered + " " + "questions.");
        $(".rightAnswer").removeClass("hidden");
        $(".rightAnswer").text("Times up!");
        $(".rightAnswer").append("<p> Correct answer is" + " " + currentAnswer + "</p>");
        $(".rightAnswer").attr("style",'color:darkslategray');
        $(".timeRemaining").addClass("emptySpace");
        cleanUpAfterSelection();
    }

    function cleanUpForNewQuestion() {
        doneWithQuestion = false;
        timer = 10;
        $(".correctPicture").addClass("hidden");
        $(".rightAnswer").addClass("hidden");
        $(".timeRemaining").removeClass("emptySpace");
        $(".timeLeft").text(timer);
        getCurrentAnswer();
        timeStart();

    }

    function questionOne() {
        cleanUpForNewQuestion();

        $(".currentQuestion").text(questionSet.question1);
        $(".answer1").text(questionSet.q1Options[0]);
        $(".answer2").text(questionSet.q1Options[1]);
        $(".answer3").text(questionSet.q1Options[2]);
        $(".answer4").text(questionSet.q1Options[3]);

        $(".answer1").one("click", wrong);
        $(".answer2").one("click", wrong);
        $(".answer3").one("click", correct);
        $(".answer4").one("click", wrong);
        /*for (var i = 0; i < 7; i++) (function (i) {

            console.log(questionSet.question[i]);
            $(".currentQuestion").text(questionSet.question[i]);
            $(".answer1").text(q[i]Options.q[i]O1);
            $(".answer2").text(q[i]Options.q[i]O2);
            $(".answer3").text(q[i]Options.q[1]O3);
            $(".answer4").text(q[i]Options.q[i]O4);

        } (i));*/
    }

    function questionTwo() {
        cleanUpForNewQuestion();

        $(".currentQuestion").text(questionSet.question2);
        $(".answer1").text(questionSet.q2Options[0]);
        $(".answer2").text(questionSet.q2Options[1]);
        $(".answer3").text(questionSet.q2Options[2]);
        $(".answer4").text(questionSet.q2Options[3]);
        showAnswers();

        $(".answer1").one("click", wrong);
        $(".answer2").one("click", wrong);
        $(".answer3").one("click", correct);
        $(".answer4").one("click", wrong);
    }

    function questionThree() {
        cleanUpForNewQuestion();

        $(".currentQuestion").text(questionSet.question3);
        $(".answer1").text(questionSet.q3Options[0]);
        $(".answer2").text(questionSet.q3Options[1]);
        $(".answer3").text(questionSet.q3Options[2]);
        $(".answer4").text(questionSet.q3Options[3]);
        showAnswers();

        $(".answer1").one("click", wrong);
        $(".answer2").one("click", correct);
        $(".answer3").one("click", wrong);
        $(".answer4").one("click", wrong);
    }

    function questionFour() {
        cleanUpForNewQuestion();

        $(".currentQuestion").text(questionSet.question4);
        $(".answer1").text(questionSet.q4Options[0]);
        $(".answer2").text(questionSet.q4Options[1]);
        $(".answer3").text(questionSet.q4Options[2]);
        $(".answer4").text(questionSet.q4Options[3]);
        showAnswers();

        $(".answer1").one("click", wrong);
        $(".answer2").one("click", wrong);
        $(".answer3").one("click", wrong);
        $(".answer4").one("click", correct);
    }

    function questionFive() {
        cleanUpForNewQuestion();

        $(".currentQuestion").text(questionSet.question5);
        $(".answer1").text(questionSet.q5Options[0]);
        $(".answer2").text(questionSet.q5Options[1]);
        $(".answer3").text(questionSet.q5Options[2]);
        $(".answer4").text(questionSet.q5Options[3]);
        showAnswers();

        $(".answer1").one("click", correct);
        $(".answer2").one("click", wrong);
        $(".answer3").one("click", wrong);
        $(".answer4").one("click", wrong);
    }

    function questionSix() {
        cleanUpForNewQuestion();

        $(".currentQuestion").text(questionSet.question6);
        $(".answer1").text(questionSet.q6Options[0]);
        $(".answer2").text(questionSet.q6Options[1]);
        $(".answer3").text(questionSet.q6Options[2]);
        $(".answer4").text(questionSet.q6Options[3]);
        showAnswers();

        $(".answer1").one("click", wrong);
        $(".answer2").one("click", correct);
        $(".answer3").one("click", wrong);
        $(".answer4").one("click", wrong);
    }

    function gameStart() {
        $(".game").addClass("hidden");
        $(".refresh").addClass("hidden");
        $(".correctPicture").addClass("hidden");
        $(".start").removeClass("hidden");
        $(".startButton").one("click", initialize);

    }

    gameStart();


});

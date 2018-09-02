
var question0 = {
    question: "Cleveland was the first city to be lit by electricity in what year?",
    answer: "1879",
    choices: ["1859", "1879", "1839", "1899"],
    correctAnswer: 1,
    fact: "Cleveland was also the first to use an electric traffic signal, installed on Euclid Avenue and East 105th Street.",
    };
    
var question1 = {
    question: "What Cleveland DJ is famously credited with coining the term 'Rock 'N' Roll'?",
    answer: "Alan Freed",
    choices: ["Alan Freed", "Bill Randle", "Jack Armstrong", "Chuck Knapp"],
    correctAnswer: 0,
    fact: "WMMS DJ, Alan Freed, famously coined the term in the 1950's when putting on the first ever rock 'n' roll show known as The Moondog Coronation Ball.",
    };
    
var question2 = {
    question: "Playhouse Square is the _____ largest performing arts center in the country?",
    answer: "Second",
    choices: ["First", "Second", "Third", "Fourth"],
    correctAnswer: 1,
    fact: "If you can't catch your favorite show on Broadway in New York City, Playhouse Square is the next best thing. Cleveland's very own theater district is a mandatory stop for major touring Playbill's including The Lion King, Mama Mia!, and Hamilton. You can't spell culture without the C, L, and E! (I want credit for that tagline city of Cleveland. All rights reserved.)",
    };

var question3 = {
    question: "Which of the following was first produced in the city of Cleveland?",
    answer: "Potato Chips",
    choices: ["Steel", "Peanut Butter",  "Model-T", "Potato Chips"],
    correctAnswer: 3,
    fact: "Potato chips were served exclusively in restaurants until 1885, when William Tappendon began selling potato chips to local grocers in Cleveland, Ohio. Sales took off immediately, so to keep up with demand, Tappendon turned his barn into the world's first potato chip factory.",
    };

var question4 = {
    question: "What Cleveland Street was once known as 'Millionaires Row'?",
    answer: "Euclid Ave.",
    choices: ["Lake Ave.", "Clifton Blvd.", "Euclid Ave.", "Lakeside Ave."],
    correctAnswer: 2,
    fact: "According to Cleveland Historical, Euclid Ave. was once home to moguls such as John D. Rockefeller and was also referred to as 'The Showplace of America,' because of its many mansions lining the street.",
    };
    
var question5 = {
    question: "How many times has the Cuyahoga River caught on fire?",
    answer: "13",
    choices: ["13", "15", "1", "8"],
    correctAnswer: 0,
    fact: "Time Magazine featured a famous image of the River burning in 1969, however the photo was actually of a previous River fire in 1952. Can you say, '#fakeNews'?",
    };
    
var question6 = {
    question: "What famous candy was invented in Cleveland?",
    answer: "Life Savers",
    choices: ["Wrigley's Gum", "Life Savers", "Pop Rocks", "Mentos"],
    correctAnswer: 1,
    fact: "Clarence A. Crane wanted to solve the ever-troubling problem of candy melting. He used a machine that pharmacists use to make round flat pills, punched a hole in the center of the candy concoction and called it a Life Saver.",
};
    
    var question7 = {
    question: "You actually need a license in Cleveland to catch which of the following?",
    answer: "Mouse",
    choices: ["Rabbit", "Skunk", "Gopher", "Mouse"],
    correctAnswer: 3,
    fact: "Another Cleveland law: snitches get stitches.",
}; 
    
var question8 = {
    question: "Which of these movies was not shot in Cleveland?",
    answer: "Spiderman",
    choices: ["Captain America: The Winter Soldier", "The Deer Hunter", "Spiderman", "The Avengers"],
    correctAnswer: 2,
    fact: "You thought it was the non-superhero movie didn't you? Spiderman 3 was actually filmed in Cleveland, but the first installment snubbed its nose at the Land and their generous Hollywood tax breaks.",
};
    
var question9 = {
    question: "What celebrity is not originally from Cleveland?",
    answer: "Judge Judy",
    choices: ["Judge Judy", "Halle Barry", "Arsenio Hall", "Steve Harvey"],
    correctAnswer: 0,
    fact: "Judge Judy was originally from Brooklyn, NY, however Halle Barry hails from Bedford, Arsenio Hall grew up on Kinsman, and Steve Harvey is a Glenville graduate.",
};

//Array of questions
var QuestionsArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];

var indexQuestion = 0;    

//Game scores
var gameScores = {
	answeredCorrect: 0,
	answeredWrong: 0,
	missed: 0
};

var timer = {
    time:10,

    reset: function(){
        timer.time = 10; 
        $('.timerDisplay').html('Timer: ' + '00:10');
    },

    start: function(){
        counter = setInterval(timer.count, 1000);
    },

    stop: function(){
        clearInterval(counter);
    },

    count: function(){
        timer.time--;
        var converted = timer.timeConverter(timer.time);
        $('.timerDisplay').html('Timer: ' + converted);

        if (timer.time == 0){
            $('#quizMessage').show();
            $('.timerDisplay').hide();
            $('.btn').hide();
            $('#quizMessage').html("<h3>Time's up! <br> The correct answer was: <br>" + QuestionsArray[indexQuestion].answer + "</h3>" + "<br><p>" + QuestionsArray[indexQuestion].fact + "</p><br>");
            gameScores.missed++;
            setTimeout(nextQuestion, 10000);
        }
    },

    //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
    timeConverter: function(t){ 
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

};


function resetVariables() {
	gameScores.answeredCorrect = 0;
	gameScores.answeredWrong = 0;
	gameScores.missed = 0;
	indexQuestion = 0;

	$("#score").html("");
	$("#reset").hide();
}

//move to next question function

function nextQuestion() {
    indexQuestion++;
        if (indexQuestion < QuestionsArray.length){
            displayQuestion();
            $('#quizMessage').hide();
            $('.timerDisplay').show();
            $('.btn').show();
            timer.stop();
            timer.reset();
            timer.start();
        }

        else {
            $('#quizMessage').hide();
            $('#question').hide();
            $("#score").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
            "<div>"+ "Correct Guesses: " + gameScores.answeredCorrect +"</div>" + 
            "<div>"+ "Wrong Guesses: " + gameScores.answeredWrong +"</div>" +
            "<div>"+ "Missed Questions: " + gameScores.missed +"</div>");    
            timer.stop();
            $('.timerDisplay').html('00:00');

            $("#reset").show();

            $('.resetme').click(function()
            {
                $('#quizMessage').hide();
                resetVariables();
                displayQuestion();
                $('#question').show();
                $('.btn').show();
                $('.timerDisplay').show();
                timer.stop();
                timer.reset();
                timer.start();
            });
        }
};

//Display Question
function displayQuestion() {
    $("#question").html("<h1>" + QuestionsArray[indexQuestion].question + "</h1>");
    $("#button0").text(QuestionsArray[indexQuestion].choices[0]);
    $("#button1").text(QuestionsArray[indexQuestion].choices[1]);
    $("#button2").text(QuestionsArray[indexQuestion].choices[2]);
    $("#button3").text(QuestionsArray[indexQuestion].choices[3]);
};

//Start game on button press
$(document).ready(function() {	
    //hide all until start button is pressed
    
    $('.timerDisplay').hide();
    $('.btn').hide();
    $("#reset").hide();
    
    $('#startme').on("click", function() 
    
        {
            displayQuestion();
            timer.reset();
            timer.start();
            //show timer and buttons
            $('.timerDisplay').show();
            $('.btn').show();
            $("#startme").hide();
            $(".title").hide();
        });


//User input check answer
$('.btn').click(function() {
if (indexQuestion < QuestionsArray.length){
    var userButtonValue = ($(this).attr("data-value"));
    
    //Check for win
    if (userButtonValue == QuestionsArray[indexQuestion].correctAnswer){      
        $('#quizMessage').html("<h3>Correct!</h3>" + "<br><p>" + QuestionsArray[indexQuestion].fact + "</p><br>");
        gameScores.answeredCorrect ++;
        timer.stop();
        timer.reset();						
    }
    //Else loss
    else{
        $('#quizMessage').html("<h3>Wrong! <br> The correct answer was: <br>" + QuestionsArray[indexQuestion].answer + "</h3>" + "<br><p>" + QuestionsArray[indexQuestion].fact + "</p><br>");
        gameScores.answeredWrong ++;
        //reset timer
        timer.stop();
        timer.reset();	
    }

    $('#quizMessage').show(); 
    $('.timerDisplay').hide();
    $('.btn').hide();

    setTimeout(nextQuestion, 15000);
    
}
});





// end document.ready function
});
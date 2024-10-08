//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 61;
let countdown;
//Questions and Options array
const quizArray = [
    {
        id: "0",
        question: "What is the primary purpose of campus journalism?",
        options: ["Entertainment","To inform and educate the student body","To promote the school","To create gossip"],
        correct: "To inform and educate the student body",
    },
    {
        id: "1",
        question: "+Which law governs campus journalism in the Philippines?",
        options: ["Republic Act No. 9006","Republic Act No. 10627","Republic Act No. 8371","Republic Act No. 7079"],
        correct: "Republic Act No. 7079",
    },
    {
        id: "2",
        question: "Which of the following is considered a basic element of news?",
        options: ["Length","Clarity","Timeliness","Complexity"],
        correct: "Timeliness",
    },
    {
        id: "3",
        question: "What is 'inverted pyramid' style in journalism?",
        options: ["Writing with complicated language","Presenting the most important information first","Ending articles with the most important facts","Organizing articles in alphabetical order"],
        correct: "Presenting the most important information first",
    },
    {
        id: "4",
        question: "In campus journalism, what is a 'feature article'?",
        options: ["An article that covers breaking news","An article focused on personal opinions","A deeper exploration of a particular topic or theme","An article about school rules"],
        correct: "A deeper exploration of a particular topic or theme",
    },
    {
        id: "5",
        question: "Which organization in the Philippines is known for advocating student rights and welfare?",
        options: ["National Union of Students of the Philippines (NUSP)","Philippine Press Institute (PPI)","Commission on Higher Education (CHED)","Department of Education (DepEd)"],
        correct: "National Union of Students of the Philippines (NUSP)",
    }, {
        id: "6",
        question: "What is the role of a news editor?",
        options: ["To write all articles","To manage the layout of the publication","To oversee the content and ensure it meets standards","To publish the newspaper without any review"],
        correct: "To oversee the content and ensure it meets standards",
    },
    {
        id: "7",
        question: "What should a journalist do if they are offered a bribe for a favorable article?",
        options: ["Accept the bribe","Report it to the authorities","Ignore it","Discuss it with friends first"],
        correct: "Report it to the authorities",
    },
    {
        id: "8",
        question: "Which of the following is a notable Philippine campus publication?",
        options: ["The Daily Inquirer","The Manila Times","The Varsitarian","The Philippine Star"],
        correct: "The Varsitarian",
    },
    {
        id: "9",
        question: "What is 'plagiarism' in journalism?",
        options: ["Rewriting information in your own words","Copying someone else's work without giving credit","Conducting interviews","Publishing multimedia content"],
        correct: "Copying someone else's work without giving credit",
    },

    {
        id: "10",
        question: "What is the significance of 'fact-checking' in journalism?",
        options: ["It saves time in writing articles","It ensures the credibility and accuracy of the information","It makes the article longer","It helps in designing the publication"],
        correct: "It ensures the credibility and accuracy of the information",
    },

    {
        id: "11",
        question: "What does a news reporter need to ensure about their sources?",
        options: ["They are the reporter's friends","They are irrelevant","They are credible and reliable","They are anonymous"],
        correct: "They are credible and reliable",
    },

    {
        id: "12",
        question: "Which of the following is an ethical guideline for campus journalists?",
        options: ["Always use catchy headlines regardless of content","Respect privacy and confidentiality of sources","Publish first and verify later","Only report on positive news"],
        correct: "Respect privacy and confidentiality of sources",
    },

    {
        id: "13",
        question: "What is a lead in a news article?",
        options: ["The last paragraph","The main story of the newspaper","The opening sentence or paragraph that summarizes the news","A type of advertisement"],
        correct: "The opening sentence or paragraph that summarizes the news",
    },

    {
        id: "14",
        question: "Which Philippine entity supports and regulates the practice of journalism in the country?",
        options: ["National Bureau of Investigation (NBI)","Commission on Higher Education (CHED)","National Press Club (NPC)","Department of Education (DepEd)"],
        correct: "National Press Club (NPC)",
    },

    {
        id: "15",
        question: "What is 'sensationalism' in journalism?",
        options: ["Reporting on stories with accurate facts","Using shocking headlines and exaggerated stories to attract readers","Writing for niche audiences only","Focused reporting on local issues"],
        correct: "Using shocking headlines and exaggerated stories to attract readers",
    },
	
	    {
        id: "16",
        question: "What should a campus journalist do before publishing an article?",
        options: ["Confirm the accuracy of all facts","Seek approval from friends","Wait for a good time","Ignore feedback"],
        correct: "Confirm the accuracy of all facts",
    },
	
	    {
        id: "17",
        question: "The practice of speaking directly to individuals for information is known as:",
        options: ["Reporting","Interviewing","Investigating","Editing"],
        correct: "Interviewing",
    },
	
	    {
        id: "18",
        question: "What is the importance of having a diverse range of voices in campus journalism?",
        options: ["It confuses readers","It shows a balance in information and representation","It complicates the publication process","It promotes one-sided stories"],
        correct: "It shows a balance in information and representation",
    },
	
	    {
        id: "19",
        question: "What does the term 'gatekeeping' refer to in journalism?",
        options: ["Controlling the flow of information to the public","Creating engaging headlines","Writing complex articles","Deciding topics based on popularity"],
        correct: "Controlling the flow of information to the public",
    },

	    {
        id: "20",
        question: "What is the primary function of an editorial in a school publication?",
        options: ["To report facts only","To express the publication's opinion on issues","To summarize past news events","To feature student achievements"],
        correct: "To express the publication's opinion on issues",
    },
	
		    {
        id: "21",
        question: "Which of the following is a typical role of a layout artist in campus journalism?",
        options: ["Writing articles","Designing the visual layout of the publication","Conducting interviews","Copyediting text"],
        correct: "Designing the visual layout of the publication",
    },
	
		    {
        id: "22",
        question: "What is a 'press release'?",
        options: ["An article written by journalists","An official statement issued to journalists","An editorial opinion piece","A collection of opinion articles"],
        correct: "An official statement issued to journalists",
    },
	
		    {
        id: "23",
        question: "What is the purpose of photojournalism in campus journalism?",
        options: ["To create advertisements","To document events visually and enhance storytelling","To write lengthy essays","To conduct interviews"],
        correct: "To document events visually and enhance storytelling",
    },
	
		    {
        id: "24",
        question: "Why is it important for campus journalists to understand their audience?",
        options: ["To sell more ads","To cater content that is relevant and engaging for readers","To impress teachers","To compete with other schools"],
        correct: "To cater content that is relevant and engaging for readers",
    },
];
//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + (questionCount*3); //2 point each
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Questions";
            //display quiz
            quizDisplay(questionCount);
            count = 61;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};
//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount+=4;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 61;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
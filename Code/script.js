const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers-buttons");

let shuffledQuestions, currentQuestionIndex;
let quizScore =0;


startButton.addEventListener("click",startGame);

nextButton.addEventListener("click",() => {
    currentQuestionIndex++;
    setnextQuestion();
});



function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(()=> Math.random() -0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setnextQuestion();
    quizScore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText= question.question;
    question.answers.forEach((answers) => {
        const button = document.createElement("button");
        button.innerText=answers.text;
        button.classList.add("btn");
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else {
        startButton.innerText="restart";
        startButton.classList.remove("hide");
    }
    if(selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById('right-answer').innerHTML=quizScore;
}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
}



function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}
const questions =[
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Bern", correct: false},
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Moskau", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Peking", correct: false},
            {text: "Mexiko city", correct: false},
            {text: "Rom", correct: true},
            {text: "Washington", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Brasilia", correct: true},
            {text: "Madrid", correct: false},
            {text: "Berlin", correct: false},
            {text: "Wien", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Kairo", correct: false},
            {text: "Washington D.C.", correct: true},
            {text: "New York", correct: false},
            {text: "Tokyo", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Madrid", correct: true},
            {text: "Warschau", correct: false},
            {text: "Beirut", correct: false},
            {text: "Amsterdam", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Paris", correct: false},
            {text: "Mexiko city", correct: false},
            {text: "London", correct: true},
            {text: "Neu-Delhi", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Tokyo", correct: false},
            {text: "Moskau", correct: true},
            {text: "Kairo", correct: false},
            {text: "Stockholm", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Washington D.C.", correct: false},
            {text: "Peking", correct: false},
            {text: "Beirut", correct: false},
            {text: "Berlin", correct: true}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Peking", correct: true},
            {text: "Colombo", correct: false},
            {text: "Rom", correct: false},
            {text: "Tokyo", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Tokyo", correct: true},
            {text: "London", correct: false},
            {text: "Wien", correct: false},
            {text: "Warschau", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Kairo", correct: true},
            {text: "Mexiko city", correct: false},
            {text: "Berlin", correct: false},
            {text: "Bern", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Madrid", correct: false},
            {text: "Beirut", correct: false},
            {text: "Brasilia", correct: false},
            {text: "Neu-Delhi", correct: true}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Washingon D.C.", correct: false},
            {text: "Peking", correct: false},
            {text: "Wien", correct: true},
            {text: "Amsterdam", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Tokyo", correct: false},
            {text: "Peking", correct: false},
            {text: "Wien", correct: false},
            {text: "Warschau", correct: true}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Bern", correct: false},
            {text: "Mexiko city", correct: true},
            {text: "Rom", correct: false},
            {text: "Paris", correct: true}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Amsterdam", correct: true},
            {text: "Beirut", correct: false},
            {text: "Brasilia", correct: false},
            {text: "Berlin", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Stockholm", correct: true},
            {text: "Moskau", correct: false},
            {text: "London", correct: false},
            {text: "Madrid", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Kairo", correct: false},
            {text: "Colombo", correct: false},
            {text: "Washington D.C.", correct: false},
            {text: "Beirut", correct: true}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "London", correct: false},
            {text: "Colombo", correct: true},
            {text: "Neu-Delhi", correct: false},
            {text: "Mexiko city", correct: false}
        ],
    },
    {
        question:"Welche Stadt gehört zu diesem Bild?",
        answers:[
            {text: "Peking", correct: false},
            {text: "Warschau", correct: false},
            {text: "Berlin", correct: false},
            {text: "Teheran", correct: true}
        ],
    },
]
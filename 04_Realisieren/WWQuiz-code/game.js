const question = document.querySelector('#question');
const questionpic = document.querySelector('#questionpic');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: 'was ist die Hauptstadt von Frankreich?' ,
        choice1: 'Genve',        
        choice2: 'Paris',        
        choice3: 'Monacco',        
        choice4: 'Sion',
        answer: 2,
    },
    {
        question: 'was ist die Hauptstadt von Italien?',
        choice1: 'Rom',        
        choice2: 'Lugano',        
        choice3: 'Turin',        
        choice4: 'Italia',
        answer: 1,
    },
    {
        question: 'was ist die Hauptstadt von Brasilien?',
        choice1: 'Rio de janeiro',        
        choice2: 'Brasilie',        
        choice3: 'Madirid',        
        choice4: 'Brasilia',
        answer: 4,
    },
    {
        question: 'was ist die Hauptstadt von Vereinigte Staaten?',
        choice1: 'Brooklyn',        
        choice2: 'LosAngelas',        
        choice3: 'Washington DC',        
        choice4: 'New York',
        answer: 3,
    },
    {
        question: 'was ist die Hauptstadt von Spanien?',
        choice1: 'Madrid',        
        choice2: 'Monacco',        
        choice3: 'Barcelona',        
        choice4: 'Sevilla',
        answer: 1,
    },
    {
        question: 'was ist die Hauptstadt von Vereinigtes Königreich?',
        choice1: 'Brixton',        
        choice2: 'Manchaster',        
        choice3: 'Liverpool',        
        choice4: 'London',
        answer: 4,
    },
    {
        question: 'was ist die Hauptstadt von Russland?',
        choice1: 'Nowgorod',        
        choice2: 'Moskau',        
        choice3: 'Twer',        
        choice4: 'Kiew',
        answer: 2,
    },
    {
        question: 'was ist die Hauptstadt von Deutschland?',
        choice1: 'Hamburg',        
        choice2: 'Köln',        
        choice3: 'Basel',        
        choice4: 'Berlin',
        answer: 4,
    },
    {
        question: 'was ist die Hauptstadt von China?',
        choice1: 'Peking',        
        choice2: 'Shanghai',        
        choice3: 'Xian',        
        choice4: 'Chongqing',
        answer: 1,
    },
    {
        question: 'was ist die Hauptstadt von Japan?',
        choice1: 'Kyoto',        
        choice2: 'Shanghai',        
        choice3: 'Osaka',        
        choice4: 'Tokio',
        answer: 4,
    },
    {
        question: 'was ist die Hauptstadt von Ägypten?',
        choice1: 'Ägypt',        
        choice2: 'Kairo',        
        choice3: 'Gise',        
        choice4: 'Alexandria',
        answer: 2,
    },
    {
        question: 'was ist die Hauptstadt von Indien?',
        choice1: 'Jaipur',        
        choice2: 'Mumbai',        
        choice3: 'Neu-Delhi',        
        choice4: 'Bengaluru',
        answer: 3,
    },
    {
        question: 'was ist die Hauptstadt von Österreich?',
        choice1: 'Wien',        
        choice2: 'Linz',        
        choice3: 'Wels',        
        choice4: 'Lichtenstein',
        answer: 1,
    },
    {
        question: 'was ist die Hauptstadt von Polen?',
        choice1: 'Warschau',        
        choice2: 'Breslau',        
        choice3: 'Lublin',        
        choice4: 'Dublin',
        answer: 1,
    },
    {
        question: 'was ist die Hauptstadt von Mexiko?',
        choice1: 'Mexiko',        
        choice2: 'Monterrey',        
        choice3: 'Mexiko City',        
        choice4: 'Tijuana',
        answer: 3,
    },
    {
        question: 'was ist die Hauptstadt von Holand?',
        choice1: 'Nimwegen',        
        choice2: 'Brüssel',        
        choice3: 'Breda',        
        choice4: 'Amsterdam',
        answer: 4,
    },
    {
        question: 'was ist die Hauptstadt von Schweden?',
        choice1: 'Stockholm',        
        choice2: 'malmö',        
        choice3: 'Helsinki',        
        choice4: 'Göteborg',
        answer: 1,
    },
    {
        question: 'was ist die Hauptstadt von Libanon?',
        choice1: 'Tripoli',        
        choice2: 'Tyros',        
        choice3: 'Beirut',        
        choice4: 'Baalbek',
        answer: 3,
    },
    {
        question: 'was ist die Hauptstadt von Sri Lanka?',
        choice1: 'Kaduwela',        
        choice2: 'Colombo',        
        choice3: 'Jaffina',        
        choice4: 'Sri Lanka',
        answer: 2,
    },
    {
        question: 'was ist die Hauptstadt von Iran?',
        choice1: 'Isfehan',        
        choice2: 'Maschhad',        
        choice3: 'Isfahan',        
        choice4: 'Teheran',
        answer: 4,
    },
]


const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsindex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsindex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsindex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        
        }, 1000)
        
    })
})


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()



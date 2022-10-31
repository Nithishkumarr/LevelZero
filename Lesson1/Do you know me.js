var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName + ' to - DO YOU KNOW Nithish ')

// data of high score
var highScores = [
  {
    name: "Bhuvan",
    score: 11,
  },
  {
    name: 'Sagar',
    score: 10,
  },
  {
    name: 'Nishanth',
    score: 9,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Right! Seems like you really know Nithish.')
    score = score + 1
  } else {
    console.log('Oops! the correct answer is ' + answer)
    console.log('And you call yourself my friend?')
  }

  console.log('Current Score: ', score)
  console.log('-----------------')
}

// array of objects
var questions = [
  {
    question: 'Where do I live? ',
    answer: 'Mysore',
  },
  {
    question: 'Which is my favorite place in karnataka? ',
    answer: 'Chikkamagalur',
  },
  {
    question: 'Who is my oldest friend? ',
    answer: 'sagar',
  },
  {
    question: 'What is my favorite subject in engineering? ',
    answer: 'DME',
  },
  {
    question: 'Which is my favorire cartoon character? ',
    answer: 'Bhim',
  },
  {
    question: 'Can u guess my fav sports ',
    answer: 'cricket',
  },
  {
    question: 'Who is my favorite cricket player ',
    answer: "virat kholi",
  },
  {
    question: 'What is my favorite shot of virat in cricket ',
    answer: 'cover drive',
  },
  {
    question: 'Which is my favorite drink? ',
    answer: 'milkshakes',
  },
  {
    question: "Here's the last question - Which is my favorite Movie? ",
    answer: 'paramathma',
  },
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log('YAY! You SCORED: ', score)
console.log('-------------------')

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

console.log(
  'If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.'
)
console.log('Thank you for playing!')

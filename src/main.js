// Query Selectors
const posterImage = document.querySelector('.poster-img')
const posterTitle = document.querySelector('.poster-title')
const posterQuote = document.querySelector('.poster-quote')

const savePosterButton = document.querySelector('.save-poster')
const showRandomButton = document.querySelector('.show-random')
const showSavedButton = document.querySelector('.show-saved')
const showFormButton = document.querySelector('.show-form')
const unmotivationalButton = document.querySelector('.show-unmotivational')

const backToMainButton = document.querySelector('.back-to-main')
const unmotivationalBackButton = document.querySelector('.unmotivational-back-to-main')
const showMain = document.querySelector('.show-main')

const userPosterForm = document.querySelector('form')
const userPosterImage = document.querySelector('#poster-image-url')
const userPosterTitle = document.querySelector('#poster-title')
const userPosterQuote = document.querySelector('#poster-quote')

const mainPosterPage = document.querySelector('.main-poster')
const posterFormPage = document.querySelector('.poster-form')
const unmotivationalPage = document.querySelector('.unmotivational-posters')
const savedPostersPage = document.querySelector('.saved-posters')

const savedPostersGrid = document.querySelector('.saved-posters-grid')
const unmotivationalPostersGrid = document.querySelector('.unmotivational-posters-grid')

// Data and Variables
const images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
]
const titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
]
const quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
]
const unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url: "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url: "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url: "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
]
const savedPosters = []
let currentPoster
let posterCounter = 0
const activeUnmotivationalPosters = cleanData()

// Event Listeners
savePosterButton.addEventListener('click', savePoster)
showSavedButton.addEventListener('click', goToSaved)
showRandomButton.addEventListener('click', randomPoster)
showFormButton.addEventListener('click', goToForm)
unmotivationalButton.addEventListener('click', goToUnmotivational)

backToMainButton.addEventListener('click', goToMain)
showMain.addEventListener('click', goToMain)
unmotivationalBackButton.addEventListener('click', goToMain)

userPosterForm.addEventListener('submit', userPoster)
unmotivationalPostersGrid.addEventListener('dblclick', deletePoster)

// Functions and Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function createPoster(imageURL, title, quote) {
  const poster = {
    id: posterCounter,
    imageURL,
    title,
    quote
  }
  posterCounter++
  return poster
}

function updatePoster(posterParams) {
  currentPoster = posterParams
  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
}

function randomPoster() {
  const imageURL = images[getRandomIndex(images)]
  const title = titles[getRandomIndex(titles)]
  const quote = quotes[getRandomIndex(quotes)]
  updatePoster(createPoster(imageURL, title, quote))
}

function switchPage(page) {
  page.classList.remove('hidden')
}

function goToMain() {
  event.target.parentElement.classList.add('hidden')
  switchPage(mainPosterPage)
}

function goToSaved() {
  event.target.parentElement.classList.add('hidden')
  switchPage(savedPostersPage)
}

function goToForm() {
  event.target.parentElement.classList.add('hidden')
  switchPage(posterFormPage)
}

function goToUnmotivational() {
  event.target.parentElement.classList.add('hidden')
  switchPage(unmotivationalPage)
}

function userPoster() {
  event.preventDefault()
  const newPoster = createPoster(userPosterImage.value, userPosterTitle.value, userPosterQuote.value)
  images.push(userPosterImage.value)
  titles.push(userPosterTitle.value)
  quotes.push(userPosterQuote.value)
  goToMain()
  updatePoster(newPoster)
}

function miniPosterHTML(poster) {
  return `<div class="mini-poster", id=${poster.id}>\
    <img src="${poster.imageURL}" />\
    <h2>${poster.title}</h2>\
    <h4>${poster.quote}</h4>\
    </div>`
}

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
    savedPostersGrid.insertAdjacentHTML('beforeend', miniPosterHTML(currentPoster))
  }
}

function cleanData() {
  return unmotivationalPosters.reduce((posters, posterData) => {
    const poster = createPoster(posterData.img_url, posterData.name, posterData.description)
    posters[poster.id] = poster
    return posters
  }, {})
}

function unmotivationalSetup() {
  Object.values(activeUnmotivationalPosters).forEach((poster) => {
    unmotivationalPostersGrid.innerHTML += miniPosterHTML(poster)
  })
}

function deletePoster() {
  const target = event.target.closest('.mini-poster')
  if (target) {
    delete activeUnmotivationalPosters[target.id]
    target.remove()
  }
}

// Functions Called on Page Load
randomPoster()
unmotivationalSetup()

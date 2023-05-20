const startButton = document.querySelector('.button')
const scores = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
const holes = document.querySelectorAll('.hole')

let score = 0
let timeUp = false

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const randomHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length)
  const hole = holes[index]
  return hole
}

const peep = () => {
  const time = randomTime(400, 800)
  const hole = randomHole(holes)

  hole.classList.add('active')

  setTimeout(() => {
    hole.classList.remove('active')
    !timeUp && peep()
  }, time)
}

const whack = () => {
  score++
  scores.textContent = score
}

const hide = () => {
  holes.forEach((hole) => {
    hole.classList.remove('active')
  })
}

moles.forEach((mole) => {
  mole.addEventListener('click', () => {
    whack()
    hide()
  })
})

startButton.addEventListener('click', () => {
  score = 0
  scores.textContent = 0
  timeUp = false

  peep()

  setTimeout(() => {
    timeUp = true
  }, 15000)
})

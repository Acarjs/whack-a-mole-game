const button = document.querySelector('.button')
const scoreTable = document.querySelector('.scoreTable')
const moles = document.querySelectorAll('.mole')
const holes = document.querySelectorAll('.hole')

let score = 0
let timeUp = false

button.addEventListener('click', () => {
  score = 0
  scoreTable.innerHTML = 0
  timeUp = false

  peep()

  setTimeout(() => {
    timeUp = true
  }, 30000)
})

const randomHole = () => {
  const index = Math.floor(Math.random() * holes.length)
  const randomHole = holes[index]

  return randomHole
}

const randomTime = (min, max) => {
  return Math.random() * (max - min) + min
}

const whack = () => {
  score++
  scoreTable.textContent = score
  holes.forEach((hole) => {
    hole.classList.remove('active')
  })
}

const hide = () => {
  holes.forEach((hole) => {
    hole.classList.remove('active')
  })
}

const peep = () => {
  const hole = randomHole()
  const time = randomTime(300, 600)

  hole.classList.add('active')

  setTimeout(() => {
    hole.classList.remove('active')

    !timeUp && peep()
  }, time)
}

moles.forEach((mole) => {
  mole.addEventListener('click', () => {
    whack()
    hide()
  })
})

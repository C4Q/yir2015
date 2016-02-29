import s from '../styles/main.scss'
const qs = document.querySelector.bind(document)
const appContainerSelector = '.App__container'

qs('#moveLeftButton').addEventListener('click', moveLeft)
qs('#moveRightButton').addEventListener('click', moveRight)

function moveLeft(e) {
  e.preventDefault()
  const appContainer = qs(appContainerSelector)
  appContainer.classList.add('left')
}

function moveRight(e) {
  e.preventDefault()
  const appContainer = qs(appContainerSelector)
  appContainer.classList.remove('left')
}

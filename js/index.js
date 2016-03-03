import s from '../styles/main.scss';

const qs = document.querySelector.bind(document)
const appContainerSelector = '.App__container'
const thingsToMoveLeft = [
  '.SectionHome__text',
  '.SectionHome__img',
  '.SectionHome__container',
  '.SectionOverview__container',
  '.SectionStats__container',
  '.SectionApps__container',
  '.SectionPartners__container'
]

qs('#moveLeftButton').addEventListener('click', moveLeft)
qs('#moveRightButton').addEventListener('click', moveRight)

function moveLeft(e) {
  e.preventDefault()
  thingsToMoveLeft.map(i => qs(i)).forEach(i => {
    i.classList.add('left')
  })
}

function moveRight(e) {
  e.preventDefault()
  thingsToMoveLeft.map(i => qs(i)).forEach(i => {
    i.classList.remove('left')
  })
}

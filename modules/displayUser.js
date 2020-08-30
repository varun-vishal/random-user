import get from './getElement.js'

const img = get('.user-img')
const value = get('.user-value')
const title = get('.user-title')
const btns = [...document.querySelectorAll('.icon')]

const displayUser = (guy) => {
 img.src = guy.image;
 value.textContent = guy.name;
 title.textContent = `My name is`;
 btns.forEach(btn => btn.classList.remove('active'));
 btns[0].classList.add('active');
 btns.forEach(btn => {
  const label = btn.dataset.label;
  btn.addEventListener('click', () => {
   title.textContent = `My ${label} is`;
   value.textContent = `${guy[label]}`;
   btns.forEach(btn => btn.classList.remove('active'));
   btn.classList.add('active')
  })
 })
}

export default displayUser
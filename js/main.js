const icon = document.querySelector('.icon')
const body = document.querySelector('body')
const wraper = document.querySelector('.wrapper')

const turnOffOn = () => {
	icon.classList.toggle('icon-night')
	icon.classList.toggle('bi-sun')
	icon.classList.toggle('bi-moon')
	body.classList.toggle('body-night')
	wraper.classList.toggle('wrapper-night')
}

icon.addEventListener('click', turnOffOn)

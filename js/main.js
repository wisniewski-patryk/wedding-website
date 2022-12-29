const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const daysCount = document.querySelector('.days')
const hoursCount = document.querySelector('.hours')
const minutesCount = document.querySelector('.minutes')
const [header, info, contact, map, plan, menu, photos] = document.querySelectorAll(
	'.header, .info, .contact, .map, .plan, .menu, .photos'
)
const headerBtn = document.querySelectorAll('.homeBtn')
const infoBtn = document.querySelectorAll('.QandABtn')
const planBtn = document.querySelectorAll('.planBtn')
const menuBtn = document.querySelectorAll('.menuBtn')
const photosBtn = document.querySelectorAll('.photosBtn')
const mapBtn = document.querySelectorAll('.mapBtn')
const contactBtn = document.querySelectorAll('.contactBtn')
const sections = document.querySelectorAll('.nav__item')
const mapElement = document.querySelector('.addMap')
const timeTitle = document.querySelector('.time__section--title')
const timeNumber = document.querySelector('.time__section--number')
const cards = document.querySelectorAll('.card')

const handleNav = () => {
	nav.classList.toggle('nav--disable')

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const targetDate = new Date('2023-09-15T16:00:00.000Z')
// const targetDate = new Date('2022-12-29T10:50:00.000Z')

let lastMapAdditionTime = null

const interval = setInterval(() => {
	const currentDate = new Date()

	if (currentDate >= targetDate) {
		clearInterval(interval)
		timeTitle.remove()
		timeNumber.style.display = 'block';
		mapElement.innerHTML = '<div class="map__box"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.4599381008347!2d19.414231016137602!3d54.136497880152234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd4ce288cd6139%3A0xb16e7886925213f1!2sNowa%20Holandia!5e0!3m2!1sen!2spl!4v1665783352748!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>'
		cards.forEach(card => card.remove());
		return
	}

	const timeLeft = targetDate - currentDate
	const hoursLeft = Math.ceil((targetDate - currentDate) / 1000 / 60 / 60);
	const daysLeft = Math.ceil((targetDate - currentDate) / 1000 / 60 / 60 / 24);

	if (hoursLeft <= 3 || daysLeft <= 0) {
		if (!lastMapAdditionTime || currentDate - lastMapAdditionTime >= 1000 * 60 * 60) {
			mapElement.innerHTML = '<div class="map__box"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.4599381008347!2d19.414231016137602!3d54.136497880152234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd4ce288cd6139%3A0xb16e7886925213f1!2sNowa%20Holandia!5e0!3m2!1sen!2spl!4v1665783352748!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>'
			lastMapAdditionTime = currentDate
		}
	}
	
	const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
	const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
	
	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes

}, 1000)


const actions = {
	home: {
		removeClass: [header, nav],
		addClass: [info, map, contact, plan, menu, photos],
	},
	info: {
		removeClass: [info, nav],
		addClass: [header, plan, menu, map, contact, photos],
	},
	plan: {
		removeClass: [plan, nav],
		addClass: [header, info, map, contact, menu, photos],
	},
	menu: {
		removeClass: [menu, nav],
		addClass: [header, info, map, contact, plan, photos],
	},
	photos: {
		removeClass: [photos, nav],
		addClass: [header, info, map, contact, plan, menu],
	},
	map: {
		removeClass: [map, nav],
		addClass: [header, info, photos, contact, plan, menu],
	},
	contact: {
		removeClass: [contact, nav],
		addClass: [header, info, map, photos, plan, menu],
	},
}

const getClassName = item => `${item.classList[0]}--disable`

const handle = action => () => changeClasses(actions[action])

const changeClasses = ({ addClass, removeClass }) => {
	addClass.forEach(item => item.classList.add(getClassName(item)))
	removeClass.forEach(item => item.classList.remove(getClassName(item)))
}

navBtn.addEventListener('click', handleNav)
headerBtn.forEach(btn => btn.addEventListener('click', handle('home')))
infoBtn.forEach(btn => btn.addEventListener('click', handle('info')))
menuBtn.forEach(btn => btn.addEventListener('click', handle('menu')))
planBtn.forEach(btn => btn.addEventListener('click', handle('plan')))
photosBtn.forEach(btn => btn.addEventListener('click', handle('photos')))
mapBtn.forEach(btn => btn.addEventListener('click', handle('map')))
contactBtn.forEach(btn => btn.addEventListener('click', handle('contact')))
sections.forEach(section => {
	section.addEventListener('click', () => {
		sections.forEach(s => s.classList.remove('active-section'))
		section.classList.add('active-section')
	})
})

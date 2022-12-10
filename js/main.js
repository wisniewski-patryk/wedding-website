const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const daysCount = document.querySelector('.days__count')
const hoursCount = document.querySelector('.hours__count')
const minutesCount = document.querySelector('.minutes__count')
const secondsCount = document.querySelector('.seconds__count')
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

const setTime = () => {
	const currentTime = new Date()
	const result = new Date('9 15 2023 16:00:00') - currentTime

	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
}

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
setInterval(setTime, 1000)
headerBtn.forEach(btn => btn.addEventListener('click', handle('home')))
infoBtn.forEach(btn => btn.addEventListener('click', handle('info')))
menuBtn.forEach(btn => btn.addEventListener('click', handle('menu')))
planBtn.forEach(btn => btn.addEventListener('click', handle('plan')))
photosBtn.forEach(btn => btn.addEventListener('click', handle('photos')))
mapBtn.forEach(btn => btn.addEventListener('click', handle('map')))
contactBtn.forEach(btn => btn.addEventListener('click', handle('contact')))

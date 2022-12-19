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

const targetDate = new Date('9 15 2023 16:00:00')

const interval = setInterval(() => {
	const currentDate = new Date()

	const timeLeft = targetDate - currentDate

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

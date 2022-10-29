const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')

const daysCount = document.querySelector('.days__count')
const hoursCount = document.querySelector('.hours__count')
const minutesCount = document.querySelector('.minutes__count')
const secondsCount = document.querySelector('.seconds__count')

const header = document.querySelector('.header')
const headerBtn = document.querySelectorAll('.homeBtn')
const info = document.querySelector('.info')
const infoBtn = document.querySelectorAll('.QandABtn')
const contact = document.querySelector('.contact')
const map = document.querySelector('.map')
const plan = document.querySelector('.plan')
const planBtn = document.querySelectorAll('.planBtn')
const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menuBtn')
const photos = document.querySelector('.photos')
const photosBtn = document.querySelectorAll('.photosBtn')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	// navBtnBars.classList.remove('black-bars-color')

	// allNavItems.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		nav.classList.remove('nav--active')
	// 	})
	// })

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
	const result = usersTime - currentTime

	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
}

const appUpdate = () => {
	usersTime = new Date('9 15 2023 16:00:00')
	setTime()
}

const handleHome = () => {
	header.classList.remove('header--disable')
	info.classList.add('info--disable')
	map.classList.add('map--disable')
	contact.classList.add('contact--disable')
	plan.classList.add('plan--disable')
	menu.classList.add('menu--disable')
	photos.classList.add('photos--disable')
	nav.classList.remove('nav--active')
}
const handleInfo = () => {
	header.classList.add('header--disable')
	info.classList.remove('info--disable')
	map.classList.remove('map--disable')
	contact.classList.remove('contact--disable')
	plan.classList.add('plan--disable')
	menu.classList.add('menu--disable')
	photos.classList.add('photos--disable')
	nav.classList.remove('nav--active')
}
const handlePlan = () => {
	header.classList.add('header--disable')
	info.classList.add('info--disable')
	map.classList.add('map--disable')
	contact.classList.add('contact--disable')
	plan.classList.remove('plan--disable')
	menu.classList.add('menu--disable')
	photos.classList.add('photos--disable')
	nav.classList.remove('nav--active')
}
const handleMenu = () => {
	header.classList.add('header--disable')
	info.classList.add('info--disable')
	map.classList.add('map--disable')
	contact.classList.add('contact--disable')
	plan.classList.add('plan--disable')
	menu.classList.remove('menu--disable')
	photos.classList.add('photos--disable')
	nav.classList.remove('nav--active')
}
const handlePhotos = () => {
	header.classList.add('header--disable')
	info.classList.add('info--disable')
	map.classList.add('map--disable')
	contact.classList.add('contact--disable')
	plan.classList.add('plan--disable')
	menu.classList.add('menu--disable')
	photos.classList.remove('photos--disable')
	nav.classList.remove('nav--active')
}

navBtn.addEventListener('click', handleNav)
appUpdate()
setInterval(setTime, 1000)
headerBtn.forEach(btn => btn.addEventListener('click', handleHome))
infoBtn.forEach(btn => btn.addEventListener('click', handleInfo))
menuBtn.forEach(btn => btn.addEventListener('click', handleMenu))
planBtn.forEach(btn => btn.addEventListener('click', handlePlan))
photosBtn.forEach(btn => btn.addEventListener('click', handlePhotos))

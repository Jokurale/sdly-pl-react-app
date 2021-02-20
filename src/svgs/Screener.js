function swipeContact() {
	gsap.to('.root__contact', {
		height: '100%',
		ease: 'Expo.easeInOut'
	})
}

function unswipeContact() {
	gsap.to('.root__contact', {
		height: '0',
		ease: 'Expo.easeInOut'
	})
}

function swipeAboutme() {
	gsap.to('.root__aboutme', {
		width: '100%',
		ease: 'Expo.easeInOut'
	})
}

function unswipeAboutme() {
	gsap.to('.root__aboutme', {
		width: '0',
		ease: 'Expo.easeInOut'
	})
}

function swipeProjects() {
	gsap.to('.root__projects', {
		width: '100%',
		ease: 'Expo.easeInOut'
	})
}

function unswipeProjects() {
	gsap.to('.root__projects', {
		width: '0',
		ease: 'Expo.easeInOut'
	})
}

let frontpageView = true;

Array.from(document.getElementsByClassName('contactSwiper'))
	.forEach(item => {
		item.addEventListener('click', e => {
			if (frontpageView) {
				swipeContact()
			} else {
				unswipeContact()
			}
			frontpageView = !frontpageView
		})
	});

Array.from(document.getElementsByClassName('aboutmeSwiper'))
	.forEach(item => {
		item.addEventListener('click', e => {
			if (frontpageView) {
				swipeAboutme()
			} else {
				unswipeAboutme()
			}
			frontpageView = !frontpageView
		})
	});

Array.from(document.getElementsByClassName('projectsSwiper'))
	.forEach(item => {
		item.addEventListener('click', e => {
			if (frontpageView) {
				swipeProjects()
			} else {
				unswipeProjects()
			}
			frontpageView = !frontpageView
		})
	});
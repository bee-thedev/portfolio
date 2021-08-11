const navButton = document.querySelector('.navbutton');
const navLinks = document.querySelectorAll('.nav__link');

navButton.addEventListener('click', ()=>{
	document.body.classList.toggle('nav__open');
});


navLinks.forEach(link =>{
	link.addEventListener('click', () =>{
		document.body.classList.remove('nav__open');
	})
})
let cards = document.querySelectorAll('.card-member');


for (let card of cards) {
	let img = card.querySelector('img');
	card.style.backgroundImage = `url(${img.src})`;
}

let ejects = document.querySelectorAll('.eject');

for (let eject of ejects) {
	eject.addEventListener('click', () => {
		window.open('https://www.ejectufrn.com.br/', '_blank');
	});
}


let heroProg = document.querySelector('.hero-prog');
heroProg.addEventListener('click', () => {
	let section = document.querySelector('#programacao');
	section.scrollIntoView({ behavior: 'smooth' });
});
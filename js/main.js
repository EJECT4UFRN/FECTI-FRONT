let cards = document.querySelectorAll('.card-member');


for (let card of cards) {
	let img = card.querySelector('img');
	card.style.backgroundImage = `url(${img.src})`;
}
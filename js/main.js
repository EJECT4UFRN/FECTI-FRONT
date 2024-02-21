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


function truncateString(str, num) {
	if (str.length <= num) {
		return str;
	}
	return str.substring(0, num) + '...';
}

let member_roles = document.querySelectorAll('.member-role');
let member_name = document.querySelectorAll('.member-name');

for (let role of member_roles) {
	role.textContent = truncateString(role.textContent, 30);
}

for (let name of member_name) {
	name.textContent = truncateString(name.textContent, 30);
}

const progress = document.querySelector('.progress');

function createProgressBar(event) {
	let windowScroll = document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	let prcnt = windowScroll / windowHeight * 100;

	console.log(prcnt);

	progress.style.width = prcnt + '%';
}

function parallax(event) {
	this.querySelectorAll('.main__background').forEach(main__background => {
		main__background.style.transform = 'translateX(' + event.clientX / 50 + 'px)'
	});
}

function OpenOverlay() {
	document.getElementById('nav').style.width = "100%";
}

function CloseOverlay() {
  document.getElementById("nav").style.width = "0%";
}

document.addEventListener('mousemove', parallax);
window.addEventListener('scroll', createProgressBar)

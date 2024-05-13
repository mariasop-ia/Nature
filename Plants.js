// Homepage
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click",() => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
var slideNav = function(manual){
btns.forEach((btn) => {
    btn.classList.remove("active");
});
slides.forEach((slide) => {
    slide.classList.remove("active");
});
contents.forEach((content) => {
    content.classList.remove("active");
});
btns[manual].classList.add("active");
slides[manual].classList.add("active");
contents[manual].classList.add("active");
}
btns.forEach((btn, i) => {
btn.addEventListener("click", () => {
    slideNav(i);
})
});
// Javascript for tab navigation horizontal scroll buttons

const btnLeft = document.querySelector('.left-btn');
const btnRight = document.querySelector('.right-btn');
const tabMenu = document.querySelector('.tab-menu');

const iconVisibility = () => {
	let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
	console.log('1.', scrollLeftValue);

	let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
	console.log('2.', scrollableWidth);

	btnLeft.style.display = scrollLeftValue > 0 ? 'block' : 'none';
	btnRight.style.display = scrollableWidth > scrollLeftValue ? 'block' : 'none';
};

btnRight.addEventListener('click', () => {
	tabMenu.scrollLeft += 150;
	//iconVisibility();
	setTimeout(() => iconVisibility(), 50);
});
btnLeft.addEventListener('click', () => {
	tabMenu.scrollLeft -= 150;
	//iconVisibility();
	setTimeout(() => iconVisibility(), 50);
});

window.onload = function () {
	btnRight.style.display =
		tabMenu.scrollWidth > tabMenu.clientWidth
			|| tabMenu.scrollWidth >= window.innerWidth
			? 'block' : 'none';
	btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';
};

window.onresize = function () {
	btnRight.style.display =
		tabMenu.scrollWidth > tabMenu.clientWidth
			|| tabMenu.scrollWidth >= window.innerWidth
			? 'block' : 'none';
	btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';

	let scrollLeftValue = Math.round(tabMenu.scrollLeft);
	btnLeft.style.display = scrollLeftValue > 0 ? 'block' : 'none';
};




// Javascript to make the tab navigation draggable
let activeDrag = false;

tabMenu.addEventListener('mousemove', (drag) => {
	if (!activeDrag) return;
	tabMenu.scrollLeft -= drag.movementX;
	iconVisibility();

	tabMenu.classList.add('dragging');
});

document.addEventListener('mouseup', () => {
	activeDrag = false;

	tabMenu.classList.remove('dragging');
});

tabMenu.addEventListener('mousedown', () => {
	activeDrag = true;
});



// Javascript to view tab contents on click tab buttons
const tabs = document.querySelectorAll('.tab');
const tabBtns = document.querySelectorAll('.tab-btn');

const tab_Nav = function (tabBtnClick) {
	tabBtns.forEach((tabBtn) => {
		tabBtn.classList.remove('active');
	});

	tabs.forEach((tab) => {
		tab.classList.remove('active');
	});

	tabBtns[tabBtnClick].classList.add('active');
	tabs[tabBtnClick].classList.add('active');
};

tabBtns.forEach((tabBtn, i) => {
	tabBtn.addEventListener('click', () => {
		tab_Nav(i);
	});
});
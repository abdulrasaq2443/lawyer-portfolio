"use-strict";
//NAVIGATION BAR
const sidebar = document.querySelector(".side-bar");
const menu = document.getElementById("menu");
document.querySelector(".barLink").addEventListener("click", function () {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
		sidebar.style.opacity = "1";
		sidebar.style.width = "40%";
		menu.classList.toggle("active");
	} else {
		sidebar.classList.add("sidebarHidden");
		menu.classList.toggle("active");
		sidebar.style.opacity = "0";
		sidebar.style.width = "0";
	}
});

const menu_items = document.querySelectorAll(".linkk");

function close() {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
	} else {
		sidebar.classList.add("sidebarHidden");
		sidebar.style.opacity = "0";
		sidebar.style.width = "0";
	}
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		if (window.innerWidth <= 869) {
			menu.classList.toggle("active");
			close();
		}
	});
});

//Counter
const display = document.querySelector(".case");
const count = document.querySelectorAll(".counter");
let interval = 50;

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
	// Check if the display section is in the viewport
	if (entries[0].isIntersecting) {
		// Start the counting
		count.forEach((valueDisplay) => {
			let startValue = 200;
			let endValue = parseInt(valueDisplay.getAttribute("data-val"));
			let duration = Math.floor(interval / endValue);
			let counter = setInterval(function () {
				startValue += 1;
				valueDisplay.textContent = `${startValue}+`;
				if (startValue == endValue) {
					clearInterval(counter);
				}
			}, duration);
		});

		// Stop observing the display section
		observer.disconnect();
	}
});

// Start observing the display section
observer.observe(display);

//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });
ScrollReveal().reveal(".hero-text", {
	delay: 300,
	distance: "60px",
	origin: "left",
});

ScrollReveal().reveal(".hero-img", {
	delay: 300,
	distance: "60px",
	origin: "right",
});

ScrollReveal().reveal(".service-detail, .service-type-box", {
	delay: 100,
	origin: "bottom",
	interval: 200,
});

ScrollReveal().reveal(".law-div", {
	delay: 200,
	origin: "bottom",
	interval: 100,
	rotate: { x: 1000 },
});

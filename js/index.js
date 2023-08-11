document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	// --- SETUP START ---
	// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".smooth-scroll"),
		smooth: true, // Enable smooth scrolling
		smoothMobile: true, // Disable smooth scrolling on mobile devices if needed
	});
	// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
	locoScroll.on("scroll", ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
	ScrollTrigger.scrollerProxy(".smooth-scroll", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
				: locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: document.querySelector(".smooth-scroll").style.transform
			? "transform"
			: "fixed",
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
	// --- SETUP END ---

	gsap.utils.toArray(".section").forEach(function (elem) {
		var color = elem.getAttribute("data-color");

		ScrollTrigger.create({
			trigger: elem,
			start: "top 90%",
			end: "bottom 90%",

			onEnter: () => {
				gsap.to("main", { backgroundColor: color });
				gsap.to(elem, { opacity: 1 });
			},
			onLeave: () => {
				gsap.to("main", { backgroundColor: color });
				gsap.to(elem, { opacity: 0 });
			},
			onEnterBack: () => {
				gsap.to("main", { backgroundColor: color });
				gsap.to(elem, { opacity: 1 });
			},
			onLeaveBack: () => {
				gsap.to("main", { backgroundColor: color });
				gsap.to(elem, { opacity: 0 });
			},
			onUpdate: (self) => {
				// Use the scroll position from Locomotive Scroll to update ScrollTrigger
				locoScroll.scroll.instance.scroll.y = self.scroll();
			},
			markers: true,
		});
	});

	const nextSectionLink = document.querySelector("#next-section-link");

	// Scroll to the respective sections when the links are clicked
	nextSectionLink.addEventListener("click", () => {
		locoScroll.scrollTo(document.querySelector("#projects"));
	});
});

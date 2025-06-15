 gsap.registerPlugin(ScrollTrigger);
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

const textSplitting = () => {
  document.querySelectorAll(".about-text h1").forEach((elem) => {
    elem.innerHTML = [...elem.textContent]
      .map(char => `<span>${char}</span>`)
      .join("");
  });
};

const gsapAnimation = () => {
  document.querySelectorAll(".about-text h1").forEach((line) => {
    gsap.to(line.querySelectorAll("span"), {
      color: "#222222", // highlight color
      stagger: 0.03,
      scrollTrigger: {
        trigger: line,
        start: "top 75%",
        end: "top 40%",
        scrub: 2,
      }
    });
  });
};


textSplitting();
gsapAnimation();
document.body.classList.add("js-ready");

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

reveals.forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 10;
    const rotateX = (0.5 - (offsetY / rect.height)) * 8;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const marquee = document.querySelector(".marquee-track");

if (marquee) {
  marquee.innerHTML += marquee.innerHTML;
}

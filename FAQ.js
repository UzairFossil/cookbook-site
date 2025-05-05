const faqCont = document.querySelectorAll(".faq-container");

faqCont.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("faq-container-display");
  });
});

const faqSectionHeading = document.querySelectorAll(
  ".faq-section-heading span"
);
let index = 0;
let hasAnimated = false;
const faqSection = document.querySelector(".faq-section");

const intersectionCallbackFaq = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;
      const bgInterval = setInterval(() => {
        if (index > faqSectionHeading.length - 1) {
          clearInterval(bgInterval);
          return;
        }
        faqSectionHeading[index].style.backgroundColor = "#7d1d73";
        faqSectionHeading[index].style.color = "white";

        index++;
      }, 1000);
    }
  });
};
const faqAnim = new IntersectionObserver(intersectionCallbackFaq, {
  threshold: window.innerWidth < 797 ? 0.1 : 0.6,
});

faqAnim.observe(faqSection);

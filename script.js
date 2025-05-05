const fadeContainer = document.querySelectorAll(".fade-container");

const intersectionCallbackSimpleFade = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const childImage = entry.target.querySelector(".fade-child-one");
      const childText = entry.target.querySelector(".fade-child-two");

      childText.classList.add("fade-opacity-increase");
      childImage.classList.add("fade-opacity-increase");
    }
  });
};
const simpleFadeAnimation = new IntersectionObserver(
  intersectionCallbackSimpleFade,
  {
    threshold: window.innerHeight < 500 ? 0.1 : 0.4,
  }
);
fadeContainer.forEach((i) => {
  simpleFadeAnimation.observe(i);
});

const infoCol = document.querySelectorAll(".info-col");
const infoBoxes = document.querySelectorAll(".boxes-parent");

const intersectionCallbackInfoTransform = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // const childBoxes = entry.target.querySelector(".boxes-parent");
      const childBoxes = entry.target.querySelectorAll(".box");
      const infoText = document.querySelector(".info-text");
      childBoxes.forEach((i, index) => {
        setTimeout(
          () => {
            i.classList.add("transform-zero");
          },
          window.innerWidth < 796 ? index * 200 : 0
        );
      });

      infoText.classList.add("fade-opacity-increase");
    }
  });
};
const infoTransform = new IntersectionObserver(
  intersectionCallbackInfoTransform,
  {
    threshold: window.innerHeight < 500 ? 0.1 : 0.3,
  }
);
infoCol.forEach((i) => {
  infoTransform.observe(i);
});

const culinarySection = document.querySelectorAll(".culinary-section");

const intersectionCallbackCulinary = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("detectged");
      const fork = entry.target.querySelector(".fork");
      const knife = entry.target.querySelector(".knife");
      fork.classList.add("fork-rotate");
      knife.classList.add("knife-rotate");
    }
  });
};
const CulinaryAnim = new IntersectionObserver(intersectionCallbackCulinary, {
  threshold: window.innerHeight < 500 ? 0.1 : 0.9,
});
culinarySection.forEach((i) => {
  CulinaryAnim.observe(i);
});

const newsletterSection = document.querySelectorAll(".newsletter-section");
const mobile = document.querySelector(".footer-mobile-abs");
const secondaryText = document.querySelector(".secondary-text");

const intersectionCallbackNewsletter = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      mobile.classList.add("transform-zero");
      secondaryText.classList.add("fade-opacity-increase");
    }
  });
};
const NewsletterAnim = new IntersectionObserver(
  intersectionCallbackNewsletter,
  {
    threshold: window.innerHeight < 500 ? 0.1 : 0.6,
  }
);
newsletterSection.forEach((i) => {
  NewsletterAnim.observe(i);
});

const testimonialSection = document.querySelector(".testimonials");
const testimonialBoxes = document.querySelectorAll(".testimonial-box");

const intersectionCallbackTestimonial = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      testimonialBoxes.forEach((i, index) => {
        console.log("added");
        setTimeout(() => {
          i.classList.add("up");
        }, index * 200);
      });
    }
  });
};
const testimonialAnim = new IntersectionObserver(
  intersectionCallbackTestimonial,
  {
    threshold: window.innerWidth < 797 ? 0.1 : 0.6,
  }
);

testimonialAnim.observe(testimonialSection);

const header = document.querySelector("header");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  if (scrollY > 750) {
    header.classList.add("scrolled-header");
  } else {
    header.classList.remove("scrolled-header");
  }
});

const popup = document.querySelector(".popup");
if (!localStorage.getItem("popupShown")) {
  setTimeout(() => {
    popup.classList.add("popup-activated");
  }, 2000);
}

const OkayBtn = document.querySelector(".popup button");
OkayBtn.addEventListener("click", () => {
  popup.classList.remove("popup-activated");
  localStorage.setItem("popupShown", "true");
});

const formSubmit = document.querySelector(".form-submit");
const formInput = document.querySelector("form textarea");
const form = document.querySelector("form");

formSubmit.addEventListener("click", (e) => {
  if (formInput.value == "") {
    e.preventDefault();
    form.classList.add("error-border");
  }
});
formInput.addEventListener("input", (e) => {
  console.log(e.value, formInput.value);
  if (formInput.value.trim() != "") {
    form.classList.remove("error-border");
  }
});

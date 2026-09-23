const launchDate = new Date("2026-10-01T00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "We're live!";
  }
}, 1000);


let menuToggle = document.querySelector('.menu-toggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
  header.classList.toggle('active');
}


document.querySelectorAll('.sub-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(event) {
    event.preventDefault(); 
    event.stopPropagation(); 

    const submenu = this.closest('li').querySelector('.sub-menu-toggle');
    submenu.classList.toggle('open');
  });
});



window.addEventListener('load', function() {
  const chatbotPopup = document.createElement('div');
  chatbotPopup.className = 'chatbot-popup';
  chatbotPopup.innerHTML = `
    <div class="chatbot-header">
      <span>🧳TravelBot ✈️</span>
      <button class="chatbot-close">&times;</button>
    </div>
    <div class="chatbot-body">
      <p>Need a travel itinerary?</p>
      <a href="https://my-ai-travel-itinerary-generator.netlify.app" target="_blank" class="chatbot-link">Click here to get it instantly!</a>
    </div>
  `;

  const footer = document.querySelector('footer');
  if (footer) {
    footer.parentNode.insertBefore(chatbotPopup, footer);
  } else {
    document.body.appendChild(chatbotPopup);
  }

  document.querySelector('.chatbot-close').addEventListener('click', function(e) {
    e.stopPropagation();
    chatbotPopup.style.display = 'none';
  });

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .chatbot-popup {
      background: rgba(255, 255, 255, 0.01);
      border: 1px solid #fff;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      font-family: 'Poppins', sans-serif;
      overflow: hidden;
      width: 250px;
      animation: slideIn 0.5s ease-out;
      z-index: 1000;
    }
    .chatbot-header {
      background: rgba(0, 123, 255, 0.6);
      color: #F8F8FF;
      padding: 8px 12px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
    }
    .chatbot-close {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
    .chatbot-body {
      padding: 12px;
      text-align: center;
    }
    .chatbot-body p {
      margin: 0 0 8px 0;
      font-size: 12px;
      color: #333;
    }
    .chatbot-link {
      font-size: 13px;
      color: #007BFF;
      text-decoration: none;
      font-weight: bold;
    }
    .chatbot-link:hover {
      text-decoration: underline;
      
    }

    @media (min-width: 577px) {
      .chatbot-popup {
        position: fixed;
        bottom: 20px;
        right: 20px;
      }
    }

    @media (max-width: 576px) {
      .chatbot-popup {
        position: relative;
        width: 90%;
        max-width: 250px;
        margin: 20px auto;
        padding: 8px;
        font-size: 12px;
      }
      .chatbot-header {
        font-size: 14px;
        padding: 6px 10px;
      }
      .chatbot-body p, .chatbot-link {
        font-size: 12px;
      }
      .chatbot-close {
        font-size: 16px;
      }
    }
  `;
  document.head.appendChild(styleSheet);
});




const slides = document.querySelectorAll('.hero-slider .slides img');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  current = (current === 0) ? slides.length - 1 : current - 1;
  showSlide(current);
});

document.querySelector('.next').addEventListener('click', () => {
  current = (current === slides.length - 1) ? 0 : current + 1;
  showSlide(current);
});

setInterval(() => {
  document.querySelector('.next').click();
}, 5000);



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const recaptchaResponse = document.querySelector('textarea[name="g-recaptcha-response"]');
    
    if (!recaptchaResponse || recaptchaResponse.value.trim() === "") {
      e.preventDefault();
      alert("Please complete the reCAPTCHA before submitting.");
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const dropdown = document.querySelector(".europe-dropdown");
  const countriesPanel = document.querySelector(".europe-countries");
  const citiesPanel = document.querySelector(".europe-cities");

  if (!dropdown || !countriesPanel || !citiesPanel) return;

  const countries = document.querySelectorAll(".europe-country");
  const cities = document.querySelectorAll(".europe-city");

  let activeCountry = null;

  function positionCities(country) {
    const dropdownRect = dropdown.getBoundingClientRect();
    const countryRect = country.getBoundingClientRect();

    const topPosition = countryRect.top - dropdownRect.top;

    citiesPanel.style.top = `${topPosition}px`;
  }

  function showCities(country) {
    const cityName = country.getAttribute("data-city-menu");

    cities.forEach(city => {
      city.classList.remove("is-active");
    });

    const matchingCity = document.querySelector(
      `.europe-city[data-city="${cityName}"]`
    );

    if (!matchingCity) return;

    matchingCity.classList.add("is-active");

    activeCountry = country;

    positionCities(country);
  }

  function hideCities() {
    cities.forEach(city => {
      city.classList.remove("is-active");
    });

    activeCountry = null;
    citiesPanel.style.top = "0px";
  }

  countries.forEach(country => {

    country.addEventListener("mouseenter", function () {
      showCities(this);
    });

    const link = country.querySelector(":scope > a");

    if (link) {
      link.addEventListener("click", function (event) {
        if (window.innerWidth > 1024) {
          event.preventDefault();
        }
      });
    }
  });

  countriesPanel.addEventListener("scroll", function () {
    if (activeCountry) {
      positionCities(activeCountry);
    }
  });

  citiesPanel.addEventListener("mouseenter", function () {
  });

  dropdown.addEventListener("mouseleave", function () {
    hideCities();
  });

});

document.addEventListener("DOMContentLoaded", function () {

  const europeParent = document.querySelector(".europe-parent");
  const europeTrigger = document.querySelector(".europe-trigger");
  const europeDropdown = document.querySelector(".europe-dropdown");
  const countries = document.querySelectorAll(".europe-country");
  const citiesPanel = document.querySelector(".europe-cities");
  const cities = document.querySelectorAll(".europe-city");

  if (
    !europeParent ||
    !europeTrigger ||
    !europeDropdown ||
    !citiesPanel
  ) {
    return;
  }


  /* =======================================================
     EUROPE MAIN BUTTON — MOBILE ONLY
     ======================================================= */

  europeTrigger.addEventListener("click", function (event) {

    if (window.innerWidth > 1024) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    const isOpen = europeParent.classList.contains("open");

    if (isOpen) {

      /* CLOSE EUROPE */

      europeParent.classList.remove("open");

      europeDropdown.style.display = "none";

      citiesPanel.classList.remove("mobile-active");

      cities.forEach(function (city) {
        city.classList.remove("is-active");
      });

    } else {

      /* OPEN EUROPE */

      europeParent.classList.add("open");

      europeDropdown.style.display = "flex";

    }

  }, true);


  /* =======================================================
     COUNTRY BUTTONS — MOBILE ONLY
     ======================================================= */

  countries.forEach(function (country) {

    const countryLink = country.querySelector(":scope > a");

    if (!countryLink) {
      return;
    }


    countryLink.addEventListener("click", function (event) {

      if (window.innerWidth > 1024) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();


      /* Get the country name */

      const cityName = country.getAttribute("data-city-menu");

      if (!cityName) {
        return;
      }


      /* Find matching city group */

      let matchingCity = null;

      cities.forEach(function (city) {

        if (city.getAttribute("data-city") === cityName) {
          matchingCity = city;
        }

      });


      if (!matchingCity) {
        console.log("No matching city menu for:", cityName);
        return;
      }


      /* Is this country already open? */

      const alreadyOpen =
        matchingCity.classList.contains("is-active");


      /* Close all city groups */

      cities.forEach(function (city) {
        city.classList.remove("is-active");
      });


      /* If it was already open, close the cities panel */

      if (alreadyOpen) {

        citiesPanel.classList.remove("mobile-active");

        return;
      }


      /* Open the selected city group */

      matchingCity.classList.add("is-active");

      citiesPanel.classList.add("mobile-active");


      /* Make absolutely sure Europe itself stays open */

      europeParent.classList.add("open");

      europeDropdown.style.display = "flex";

    }, true);

  });

});

// document.addEventListener("DOMContentLoaded", function () {

//   const europeParent = document.querySelector(".europe-parent");
//   const europeTrigger = document.querySelector(".europe-trigger");
//   const europeDropdown = document.querySelector(".europe-dropdown");
//   const countries = document.querySelectorAll(".europe-country");
//   const citiesPanel = document.querySelector(".europe-cities");
//   const cities = document.querySelectorAll(".europe-city");

//   if (
//     !europeParent ||
//     !europeTrigger ||
//     !europeDropdown ||
//     !citiesPanel
//   ) {
//     return;
//   }


//   /* =======================================================
//      EUROPE MAIN BUTTON
//      ======================================================= */

//   europeTrigger.addEventListener("click", function (event) {

//     /* Desktop does absolutely nothing here */
//     if (window.innerWidth > 1024) {
//       return;
//     }

//     /*
//        Capture + stopImmediatePropagation is intentional.

//        Your existing navigation JavaScript may also have
//        a click handler for .sub-toggle or the parent menu.
//        This makes the Europe click belong ONLY to Europe.
//     */
//     event.preventDefault();
//     event.stopImmediatePropagation();

//     const isOpen = europeParent.classList.contains("open");

//     if (isOpen) {

//       /* CLOSE EUROPE */
//       europeParent.classList.remove("open");

//       europeDropdown.style.display = "none";

//       citiesPanel.classList.remove("mobile-active");

//       cities.forEach(function (city) {
//         city.classList.remove("is-active");
//       });

//     } else {

//       /* OPEN EUROPE */
//       europeParent.classList.add("open");

//       europeDropdown.style.display = "block";
//     }

//   }, true);


//   /* =======================================================
//      COUNTRY BUTTONS
//      ======================================================= */

//   countries.forEach(function (country) {

//     const countryLink = country.querySelector(":scope > a");

//     if (!countryLink) {
//       return;
//     }

//     countryLink.addEventListener("click", function (event) {

//       /* Desktop is untouched */
//       if (window.innerWidth > 1024) {
//         return;
//       }

//       event.preventDefault();
//       event.stopImmediatePropagation();

//       const cityName = country.getAttribute("data-city-menu");

//       const matchingCity = document.querySelector(
//         '.europe-city[data-city="' + cityName + '"]'
//       );

//       if (!matchingCity) {
//         return;
//       }


//       /* Is this country already open? */
//       const alreadyOpen =
//         matchingCity.classList.contains("is-active");


//       /* Close ALL city lists first */
//       cities.forEach(function (city) {
//         city.classList.remove("is-active");
//       });


//       /* If it was already open, leave everything closed */
//       if (alreadyOpen) {

//         citiesPanel.classList.remove("mobile-active");

//         return;
//       }


//       /* Open the selected country's cities */
//       matchingCity.classList.add("is-active");

//       citiesPanel.classList.add("mobile-active");

//     }, true);

//   });

// });
const launchDate = new Date("2025-10-01T00:00:00").getTime();

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


















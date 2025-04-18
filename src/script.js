const launchDate = new Date("2025-06-01T00:00:00").getTime();

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










const bigLogo = document.querySelector(".big-logo");

const screenWidth = window.innerWidth;

const logoImg = document.createElement("img");
logoImg.src = "img/logo-sigex-mini.jpeg";
logoImg.alt = "big logo";
if (screenWidth >= 1000) {
  logoImg.style.width = `${screenWidth - 300}px`;
} else {
  logoImg.style.width = `${screenWidth - 50}px`;
}
bigLogo.appendChild(logoImg);

const bigLogo = document.querySelector(".big-logo");

const logoImg = document.createElement("img");
logoImg.src = "img/logo-sigex-mini.jpeg";
logoImg.alt = "big logo";
bigLogo.appendChild(logoImg);

function resizeLogo() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1000) {
    logoImg.style.width = `${screenWidth - 300}px`;
  } else {
    logoImg.style.width = `${screenWidth - 50}px`;
  }
}

// Au chargement
resizeLogo();

// À chaque changement de taille d’écran
window.addEventListener("resize", resizeLogo);

const footer = document.querySelector(".footer");
const logoDescription = document.querySelector(".logo-description");
const address = document.querySelector(".address");
const quickLinks = document.querySelector(".quick-links");
const newsLetter = document.querySelector(".newsletter");

const networks = [
  {
    fab: "fab fa-twitter",
    networkLink: "#",
  },
  { fab: "fab fa-facebook-f", networkLink: "#" },
  { fab: "fab fa-youtube", networkLink: "#" },
  { fab: "fab fa-linkedin-in", networkLink: "#" },
];

const addressList = [
  {
    title: "Abidjan, Côte d'Ivoire",
    iconClass: "fa fa-map-marker-alt me-3",
  },
  {
    title: "+225 0719676831",
    iconClass: "fa fa-phone-alt me-3",
  },
  {
    title: "contact@sigexci.com",
    iconClass: "fa fa-envelope me-3",
  },
];

const quickLinksTab = [
  {
    title: "Accueil",
    url: "index.html",
  },
  {
    title: "à propos",
    url: "about.html",
  },
  {
    title: "Nos services",
    url: "service.html",
  },
  {
    title: "Nos atouts",
    url: "atouts.html",
  },
  {
    title: "Contacts",
    url: "contact.html",
  },
];

function renderFooter() {
  renderLogoDescription();
  renderAdress();
  renderQuickLinks();
  renderNewsLetter();
}

renderFooter();

function renderLogoDescription() {
  const logoImg = document.createElement("img");
  logoImg.src = "img/logo-sigex-mini.jpeg";
  logoImg.alt = "logo";
  logoDescription.appendChild(logoImg);

  const p = document.createElement("p");
  p.textContent =
    "SIGEX accompagne les entreprises avec des solutions de services externalisés sur mesure, alliant expertise, flexibilité et excellence opérationnelle.";
  logoDescription.appendChild(p);

  const div = document.createElement("div");
  div.classList.add(..."d-flex pt-2".split(" "));
  logoDescription.appendChild(div);

  networks.forEach((networkItem) => {
    const a = document.createElement("a");
    const aClass = "btn btn-square btn-outline-primary me-1";
    a.classList.add(...aClass.split(" "));
    a.href = networkItem.networkLink;
    div.appendChild(a);

    const i = document.createElement("i");
    i.classList.add(...networkItem.fab.split(" "));
    a.appendChild(i);
  });

  return logoDescription;
}

function renderAdress() {
  const h4 = document.createElement("h4");
  h4.classList.add(..."text-white mb-4".split(" "));
  h4.textContent = "Adresses";
  address.appendChild(h4);

  addressList.forEach((addressItem) => {
    const p = document.createElement("p");

    const i = document.createElement("i");
    i.classList.add(...addressItem.iconClass.split(" "));

    p.appendChild(i);
    p.appendChild(document.createTextNode(addressItem.title));
    address.appendChild(p);
  });

  return address;
}

function renderQuickLinks() {
  const h4 = document.createElement("h4");
  h4.classList.add(..."text-light mb-4".split(" "));
  h4.textContent = "Liens utiles";
  quickLinks.appendChild(h4);

  quickLinksTab.forEach((quickLinksItem) => {
    const a = document.createElement("a");
    a.classList.add(..."btn btn-link".split(" "));
    a.href = quickLinksItem.url;
    a.textContent = quickLinksItem.title;
    quickLinks.appendChild(a);
  });

  return quickLinks;
}

function renderNewsLetter() {
  const h4 = document.createElement("h4");
  h4.textContent = "Newsletter";
  h4.classList.add(..."text-light mb-4".split(" "));
  newsLetter.appendChild(h4);

  const p = document.createElement("p");
  p.textContent =
    "Abonnez-vous à notre newsletter afin de rester informé de nos dernières actualités et services.";
  newsLetter.appendChild(p);

  const div = document.createElement("div");
  div.classList.add(..."position-relative mx-auto".split(" "));
  div.style.maxWidth = "400px";
  newsLetter.appendChild(div);

  const input = document.createElement("input");
  input.classList.add(
    ..."form-control bg-transparent w-100 py-3 ps-4 pe-5".split(" "),
  );
  input.type = "text";
  input.placeholder = "E-mail";
  div.appendChild(input);

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add(
    ..."btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2".split(
      " ",
    ),
  );
  button.textContent = "S'abonner";
  div.appendChild(button);

  return newsLetter;
}

const head = document.querySelector("head");
const titles = document.querySelector("head title");
const link = document.querySelector("head > link:first-of-type");

const pageTitleTab = [
  "img/logo-sigex-square.jpg",
  [
    {
      pageName: "index",
      title:
        "SIGEX | Solutions de services externalisés intelligentes et sur mesure",
    },
    {
      pageName: "about",
      title:
        "SIGEX | À propos de SIGEX – Votre partenaire clé pour des services externalisés sur mesure",
    },
    {
      pageName: "service",
      title:
        "SIGEX | Nos services – Des solutions externalisées flexibles et performantes",
    },
    {
      pageName: "atout",
      title:
        "SIGEX | Nos atouts – Expertise, flexibilité et excellence opérationnelle",
    },
    {
      pageName: "contact",
      title: "SIGEX | Contactez nous – Construisons ensemble votre réussite",
    },
  ],
];

function getCurrentPage() {
  const path = window.location.pathname;

  if (path === "/" || path === "") return "index";

  return path.split("/").pop().replace(".html", "");
}

function renderIconAndTitle() {
  const currentPage = getCurrentPage();

  pageTitleTab[1].forEach((pageTitle) => {
    if (currentPage === pageTitle.pageName) {
      titles.textContent = pageTitle.title;
      link.href = pageTitleTab[0];
      link.rel = "icon";
    }
  });
}

renderIconAndTitle();

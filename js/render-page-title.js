const head = document.querySelector("head");
const titles = document.querySelector("head title");
const link = document.querySelector('head > link[rel="icon"]');
let meta = document.querySelector('head > meta[name="description"]');

const pageTitleTab = [
  "img/logo-sigex-square.jpg",
  [
    {
      pageName: "index",
      title:
        "SIGEX | Solutions de services externalisés intelligentes et sur mesure",
      metaDescription:
        "SIGEX accompagne les entreprises avec des solutions de services externalisés intelligentes, flexibles et adaptées à leurs besoins métiers.",
    },
    {
      pageName: "about",
      title:
        "SIGEX | À propos de SIGEX – Votre partenaire clé pour des services externalisés sur mesure",
      metaDescription:
        "Découvrez SIGEX, une entreprise spécialisée dans l’externalisation de services, axée sur la performance, la flexibilité et l’excellence opérationnelle.",
    },
    {
      pageName: "service",
      title:
        "SIGEX | Nos services – Des solutions externalisées flexibles et performantes",
      metaDescription:
        "Explorez les services SIGEX : externalisation de processus, accompagnement opérationnel et solutions sur mesure pour optimiser votre activité.",
    },
    {
      pageName: "atout",
      title:
        "SIGEX | Nos atouts – Expertise, flexibilité et excellence opérationnelle",
      metaDescription:
        "Pourquoi choisir SIGEX ? Expertise sectorielle, solutions flexibles, équipes qualifiées et engagement constant envers la performance client.",
    },
    {
      pageName: "contact",
      title: "SIGEX | Contactez-nous – Construisons ensemble votre réussite",
      metaDescription:
        "Contactez SIGEX pour discuter de vos besoins en services externalisés et découvrir comment nous pouvons accompagner votre croissance.",
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
      meta.content = pageTitle.metaDescription;
      link.href = pageTitleTab[0];
    }
  });
}

renderIconAndTitle();

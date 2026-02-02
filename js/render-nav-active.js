const navCollapse = document.querySelector("#navbarCollapse");
const navBar = document.querySelector(".navbar");

let navTab = [
  {
    title: "accueil",
    url: "index.html",
    isActive: false,
    dropdown: false,
  },
  {
    title: "à propos",
    url: "about.html",
    isActive: false,
    dropdown: false,
  },
  {
    title: "Nos services",
    url: "service.html",
    isActive: false,
    dropdown: false,
  },
  {
    title: "Nos atouts",
    url: "atouts.html",
    isActive: false,
    dropdown: false,
  } /** 
  {
    title: "Pages",
    url: "#",
    isActive: false,
    dropdown: [
      {
        title: "Features",
        url: "features.html",
        isActive: false,
      },
      {
        title: "Appointment",
        url: "appointment.html",
        isActive: false,
      },
      {
        title: "Our Team",
        url: "team.html",
        isActive: false,
      },
      {
        title: "Testimonial",
        url: "testimonial.html",
        isActive: false,
      },
      {
        title: "404 Page",
        url: "404.html",
        isActive: false,
      },
    ],
  },*/,
  {
    title: "Contacts",
    url: "contact.html",
    isActive: false,
    dropdown: false,
  },
];

function renderNavbarLogo() {
  const logoA = document.querySelector(".navbar a");

  const logoAClasslist = "navbar-brand d-flex align-items-center";
  logoA.classList.add(...logoAClasslist.split(" "));
  logoA.href = "index.html";
  const logoImg = document.createElement("img");
  logoImg.src = "img/logo-sigex-mini.jpeg";
  logoImg.alt = "logo";

  logoA.appendChild(logoImg);

  return logoA;
}

renderNavbarLogo();

function renderNavlink() {
  navCollapse.innerHTML = "";
  const nav = document.createElement("div");
  const navClasslist = "navbar-nav ms-auto py-3 py-lg-0";
  nav.classList.add(...navClasslist.split(" "));
  navTab.forEach((navLink) => {
    if (navLink.dropdown == false) {
      const a = document.createElement("a");
      const aClasslist = "nav-item nav-link";
      a.classList.add(...aClasslist.split(" "));
      renderNavActice(navLink, a);
      a.textContent = navLink.title;
      a.href = navLink.url;

      nav.appendChild(a);
    }
    if (navLink.dropdown != false) {
      const dropdownToggle = document.createElement("div");
      const trueDropdownClasslist = "nav-item dropdown";
      dropdownToggle.classList.add(...trueDropdownClasslist.split(" "));

      const a = document.createElement("a");
      const aClasslist = "nav-link dropdown-toggle";
      a.classList.add(...aClasslist.split(" "));
      a.textContent = navLink.title;
      a.href = navLink.url;
      a.dataset.bsToggle = "dropdown";

      const dropdownMenu = document.createElement("div");
      const dropdownMenuClasslist = "dropdown-menu bg-light m-0";
      dropdownMenu.classList.add(...dropdownMenuClasslist.split(" "));

      navLink.dropdown.forEach((dropdownElement) => {
        const aSubNavLinks = document.createElement("a");
        const aSubNavLinksClasslist = "dropdown-item";
        aSubNavLinks.classList.add(aSubNavLinksClasslist);
        aSubNavLinks.textContent = dropdownElement.title;
        aSubNavLinks.href = dropdownElement.url;
        dropdownMenu.appendChild(aSubNavLinks);
      });

      nav.appendChild(dropdownToggle);
      dropdownToggle.appendChild(a);
      dropdownToggle.appendChild(dropdownMenu);
    }
  });

  navCollapse.appendChild(nav);
  return navCollapse;
}

renderNavlink();

function getCurrentPage() {
  const path = window.location.pathname;

  if (path === "/" || path === "") return "index";

  return path.split("/").pop().replace(".html", "");
}

function renderNavActice(navLink, a) {
  const currentPage = getCurrentPage();
  const navPage = navLink.url.replace(".html", "");

  if (currentPage === navPage) {
    a.classList.add("active");
  }
}

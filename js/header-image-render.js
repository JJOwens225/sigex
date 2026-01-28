const pageHeader = document.querySelector(".page-header");

const headerImageTab = [
  {
    pageName: "about",
    imageUrl: "img/about-us.jpg",
  },
  {
    pageName: "service",
    imageUrl: "img/nos-services.jpg",
  },
  {
    pageName: "atout",
    imageUrl: "img/atout.png",
  },
  {
    pageName: "contact",
    imageUrl: `img/contact.jpg`,
  },
];

function renderHeaderImage() {
  if (!pageHeader) return;

  const currentPage = window.location.pathname;

  headerImageTab.forEach((headerImage) => {
    if (currentPage.includes(headerImage.pageName)) {
      pageHeader.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
        url(${headerImage.imageUrl}) center center no-repeat
      `;
      pageHeader.style.backgroundSize = "cover";
    }
  });
}

renderHeaderImage();

const atoutContent = document.querySelector(".atouts-content");

const atoutContentTab = [
  {
    title: "Solutions Complètes et Flexibles",
    atoutText: `Nous proposons des services modulaires et intégrés qui répondent à tous vos besoins, qu’ils soient ponctuels ou à long terme. Grâce à notre approche sur mesure, nous vous offrons la flexibilité nécessaire pour vous concentrer sur votre cœur de métier, tout en nous confiant la gestion de vos processus et services secondaires.`,
  },
  {
    title: "Expertise et Innovation",
    atoutText: `Notre expertise repose sur une connaissance approfondie des besoins de nos clients dans des secteurs variés. Nous combinons cette expertise avec une volonté constante d'innover, que ce soit dans les processus, les technologies ou les solutions proposées, afin de garantir à chaque client des services de pointe.`,
  },
  {
    title: "Engagement vers la Durabilité",
    atoutText: `Nous intégrons des pratiques responsables dans toutes nos opérations et nous nous engageons à offrir des solutions durables respectant les enjeux environnementaux, sociaux et économiques. Cette démarche nous permet d’assurer la pérennité de nos services tout en contribuant positivement à l’environnement et aux communautés locales.`,
  },
  {
    title: "Partenariat Long Terme et Confiance",
    atoutText: `Nous bâtissons des relations solides et durables avec nos clients, fondées sur la confiance, la transparence et la collaboration. En nous choisissant comme partenaire, vous bénéficiez d’une équipe engagée qui devient un véritable prolongement de votre organisation.`,
  },
  {
    title: "Excellence Opérationnelle",
    atoutText: `Nous nous engageons à offrir des services d’une qualité irréprochable en respectant des standards élevés dans toutes nos prestations. Chaque projet est conduit avec rigueur afin d’atteindre l’excellence opérationnelle.`,
  },
  {
    title: "Flexibilité et Réactivité",
    atoutText: `La flexibilité est au cœur de notre démarche. Nous nous adaptons à vos besoins spécifiques et à l’évolution de votre environnement pour proposer des solutions personnalisées, évolutives et toujours en phase avec vos priorités. Notre réactivité nous permet d’anticiper et de répondre efficacement à vos demandes.`,
  },
  {
    title: "Approche Personnalisée et Support Continu",
    atoutText: `Chez SIGEX, chaque client bénéficie d’un accompagnement personnalisé et d’un support stratégique tout au long de la collaboration. Nous assurons un suivi régulier et une assistance continue afin de garantir un service fiable et performant.`,
  },
  {
    title: "Un Large Éventail de Services",
    atoutText: `Nous couvrons une large gamme de services, allant du nettoyage et de l’entretien des locaux à la gestion de l'hébergement et au support logistique pour le secteur minier. Nos solutions sont conçues pour répondre à des besoins spécifiques et variés, avec une exécution maîtrisée et professionnelle.`,
  },
];

atoutContentTab.forEach((atoutContentItem, index) => {
  let wowDelayValue = (0.1 + index * 0.2).toFixed(1);
  const atoutsContentElement = document.createElement("div");
  atoutsContentElement.classList.add(
    ..."atouts-content__item wow fadeInUp".split(" "),
  );
  atoutsContentElement.dataset.wowDelay = `${wowDelayValue}s`;
  atoutContent.appendChild(atoutsContentElement);

  const atoutItem = document.createElement("div");
  atoutItem.classList.add("item-title");
  atoutsContentElement.appendChild(atoutItem);

  const i = document.createElement("i");
  i.classList.add(..."fa fa-check".split(" "));
  atoutItem.appendChild(i);

  const h6 = document.createElement("h6");
  h6.textContent = atoutContentItem.title;
  atoutItem.appendChild(h6);

  const itemSubContent = document.createElement("div");
  itemSubContent.classList.add("atoutItem");
  atoutsContentElement.appendChild(itemSubContent);

  const span = document.createElement("span");
  span.textContent = atoutContentItem.atoutText;
  itemSubContent.appendChild(span);
});

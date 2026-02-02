document.getElementById("devisForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("gname").value.trim();
  const email = document.getElementById("gmail").value.trim();
  const telephone = document.getElementById("cname").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Demande de devis – ${service}`);

  const body = encodeURIComponent(
    `Bonjour SIGEX,

Je souhaite obtenir un devis pour le service suivant :

Service : ${service}

Nom complet : ${nom}
E-mail : ${email}
Téléphone : ${telephone}

Message :
${message}

Cordialement,
${nom}`,
  );

  window.location.href = `mailto:contact@sigexci.com?subject=${subject}&body=${body}`;
});

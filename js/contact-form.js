document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Préoccupation`);

  const body = encodeURIComponent(`
    Nom complet: ${nom}

Message: ${message}

Cordialement ${nom}`);

  window.location.href = `mailto:contact@sigexci.com?subject=${subject}&body=${body}`;
});

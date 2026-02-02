document
  .getElementById("subscribe-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("newsletter-input").value.trim();

    const subject = encodeURIComponent("Inscription à la newsletter SIGEX");

    const body = encodeURIComponent(
      `Bonjour,

Je souhaite m’inscrire à la newsletter SIGEX.

Adresse e-mail :
${email}

Merci.
`,
    );

    window.location.href = `mailto:jeanjackdjakale@gmail.com?subject=${subject}&body=${body}`;
  });

const form = document.forms["google-sheet"];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const mailtoLink = `mailto:vishalkumarpatelofficial01@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
});

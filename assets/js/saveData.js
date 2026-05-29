emailjs.init("0ebb6FTO9wLumFGDF");

const form = document.forms["google-sheet"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_xsoz109", "template_hif79mg", form)
    .then(function () {
      alert("Thanks! Your message has been sent.");
      form.reset();
    }, function () {
      alert("Failed to send message. Please try again.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Example: Contact form submission handling
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you ${name}, we will contact you soon!`);
    contactForm.reset();
  });
});

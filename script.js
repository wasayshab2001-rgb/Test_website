// Highlight current nav link
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Contact form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks! We'll be in touch shortly.");
      form.reset();
    });
  }
});

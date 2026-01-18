document.addEventListener("DOMContentLoaded", () => {
  // === Load Navbar & Footer ===
  fetch("index.html")
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const nav = doc.querySelector("nav");
      const footer = doc.querySelector("footer");

      if (nav) document.getElementById("navbar").innerHTML = nav.outerHTML;
      if (footer) document.getElementById("footer").innerHTML = footer.outerHTML;
    });

  // === Contact Form Handling ===
  const form = document.getElementById("contact-form");
  const responseEl = document.getElementById("form-response");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {const response = await fetch("http://localhost:5678/webhook/contact", {
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(data)
        });

        if (response.ok) {
          responseEl.textContent = ` Thanks ${data.name}, your message has been sent!`;
          responseEl.className = "text-green-600 font-medium";
          form.reset();
        } else {
          responseEl.textContent = "Something went wrong. Please try again.";
          responseEl.className = "text-red-600 font-medium";
        }
      } catch (err) {
        responseEl.textContent = "Network error: " + err.message;
        responseEl.className = "text-red-600 font-medium";
      }
    });
  }

  // === Copy Prompt Button ===
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(text);
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 2000);
    });
  });
});

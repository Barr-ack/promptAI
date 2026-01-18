// Reuse Navbar and Footer on all pages
document.addEventListener("DOMContentLoaded", () => {
  fetch("index.html")
    .then(res => res.text())
    .then(html => {
      // Extract navbar
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      document.getElementById("navbar").innerHTML =
        doc.querySelector("nav").outerHTML;
      document.getElementById("footer").innerHTML =
        doc.querySelector("footer").outerHTML;
    });

  // Copy prompt button
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(text);
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = "Copy", 2000);
    });
  });
});

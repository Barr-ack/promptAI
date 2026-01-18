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
document.addEventListener("DOMContentLoaded", () => {
  const polishBtn = document.querySelector("#polishBtn");
  const textarea = document.querySelector("#promptInput");

  if (polishBtn && textarea) {
    polishBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const userPrompt = textarea.value.trim();

      if (userPrompt) {
        const encodedPrompt = encodeURIComponent(userPrompt);
        window.location.href = `output.html?prompt=${encodedPrompt}`;
      } else {
        alert("⚠️ Please enter a prompt before polishing.");
      }
    });
  }
});

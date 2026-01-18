document.addEventListener("DOMContentLoaded", () => {
  const polishBtn = document.querySelector("#polishBtn");
  const userPrompt = document.querySelector("#promptInput");
  const outputPrompt = document.querySelector("#outputPrompt");

  // Correct base URL (no duplication)
  const N8N_WEBHOOK_URL =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:5678/webhook-test/prompt2" // local dev
      : "https://your-production-n8n-domain.com/webhook-test/prompt2"; // replace with production URL

  if (polishBtn && userPrompt) {
    polishBtn.addEventListener("click", async () => {
      const text = userPrompt.value.trim();
      if (!text) return alert("⚠️ Please enter a prompt first.");

      try {
        const res = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: text }),
        });

        if (!res.ok) throw new Error("Webhook error: " + res.status);

        const result = await res.json();
        const polished = result.polishedPrompt || "No response from workflow.";

        if (outputPrompt) {
          outputPrompt.textContent = polished;
          window.scrollTo({ top: outputPrompt.offsetTop, behavior: "smooth" });
        }
      } catch (err) {
        console.error(err);
        alert("❌ Failed to connect to n8n: " + err.message);
      }
    });
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // Save to localStorage
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  messages.push({ name, email, message });
  localStorage.setItem("messages", JSON.stringify(messages));

  // Clear form
  e.target.reset();

  // Show success message
  document.getElementById("messageStatus").innerText = "Message Sent! Thank you.";

  // Scroll to top and update URL hash
  location.hash = "";
});

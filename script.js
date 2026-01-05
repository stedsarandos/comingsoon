// Hero button click
document.getElementById("heroBtn").addEventListener("click", () => {
  document.getElementById("heroMsg").textContent = "Hello, welcome to the ultimate website!";
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("/api/message");
    const data = await res.json();
    document.getElementById("formMsg").textContent = `Thanks ${name}! Backend says: "${data.message}"`;

    e.target.reset();
  } catch (err) {
    document.getElementById("formMsg").textContent = "Error sending message!";
  }
});

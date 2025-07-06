function greetUser() {
  const name = document.getElementById("username").value;
  const message = `Hello, ${name}! Welcome to Our page!`;
  document.getElementById("greeting").textContent = message;
}

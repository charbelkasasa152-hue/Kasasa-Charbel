
function startChabChat() {
  alert("Welcome to ChabChat! Your social world starts here.");
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") return;

  const message = document.createElement("p");
  message.textContent = input.value;
  messages.appendChild(message);

  input.value = "";
}

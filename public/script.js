const socket = io();

document.getElementById('sendMessage').addEventListener('click', () => {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  if (message) {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  const messages = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  messages.appendChild(messageElement);
});
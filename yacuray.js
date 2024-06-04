document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-sidebar');
    const closeButton = document.querySelector('.toggle-sidebar2');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages');
    const chatHistory = document.getElementById('chat-history');

    sidebar.style.transform = 'translateX(-260px)'; // inicializacion de la barra escondida

    toggleButton.addEventListener('click', () => {
        if (sidebar.style.transform === 'translateX(0px)') {
            sidebar.style.transform = 'translateX(-260px)';
        } else {
            sidebar.style.transform = 'translateX(0px)';
        }
    });

    closeButton.addEventListener('click', () => {
        sidebar.style.transform = 'translateX(-260px)';
    });

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message.trim()) {
            addMessageToChat(message);
            messageInput.value = '';
        }
    });

    function addMessageToChat(message) {
        const messageItem = document.createElement('div');
        messageItem.textContent = message;
        messagesContainer.appendChild(messageItem);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        const historyItem = document.createElement('li');
        historyItem.textContent = message;
        chatHistory.appendChild(historyItem);
    }
});

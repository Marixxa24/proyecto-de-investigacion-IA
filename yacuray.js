
document.querySelector('.toggle-sidebar').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.transform === 'translateX(0px)') {
        sidebar.style.transform = 'translateX(-260px)';
    } else {
        sidebar.style.transform = 'translateX(0px)';
    }
});


document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim()) {
        addMessageToChat(message);
        messageInput.value = '';
    }
});

function addMessageToChat(message) {
    const messagesContainer = document.getElementById('messages');
    const messageItem = document.createElement('div');
    messageItem.textContent = message;
    messagesContainer.appendChild(messageItem);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const chatHistory = document.getElementById('chat-history');
    const historyItem = document.createElement('li');
    historyItem.textContent = message;
    chatHistory.appendChild(historyItem);
}


//funciones aparte 

    // document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    //     const sidebar = document.querySelector('.sidebar');
    //     const chatContainer = document.querySelector('.chat-container');

    //     if (sidebar.style.transform === 'translateX(0px)') {
    //         sidebar.style.transform = 'translateX(-250px)';
    //         chatContainer.style.marginLeft = '0';
    //     } else {
    //         sidebar.style.transform = 'translateX(0px)';
    //         chatContainer.style.marginLeft = '250px';
    //     }
    // });

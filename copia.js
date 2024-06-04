<script>
    document.querySelector('.toggle-sidebar').addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        const chatContainer = document.querySelector('.chat-container');

        if (sidebar.style.transform === 'translateX(0px)') {
            sidebar.style.transform = 'translateX(-250px)';
            chatContainer.style.marginLeft = '0';
        } else {
            sidebar.style.transform = 'translateX(0px)';
            chatContainer.style.marginLeft = '250px';
        }
    });
</script>

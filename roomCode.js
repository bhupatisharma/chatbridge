document.addEventListener('DOMContentLoaded', () => {
    const roomCodeSpan = document.querySelector('.room-code-text');
    const copyBtn = document.querySelector('.copy-btn');
    const roomCode = localStorage.getItem('currentRoomCode');

    // Display the room code
    roomCodeSpan.textContent = roomCode;

    // Handle copy functionality
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(roomCode);
            
            // Visual feedback
            const originalIcon = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span class="material-symbols-outlined">check</span>';
            copyBtn.classList.add('copied');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
                copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    });
});
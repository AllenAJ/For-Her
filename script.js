// Letter animation functionality
document.querySelector('.envelope').addEventListener('click', function(){
    if (document.querySelector('.letter').classList.contains('letter--open')){
        document.querySelector('.letter').classList.remove('letter--open');
        document.querySelector('.letter').classList.add('letter--close');
        setTimeout(function(){
            document.querySelector('.letter').classList.remove('letter--close');
        }, 600);    
    } else {
        document.querySelector('.letter').classList.remove('letter--close');
        document.querySelector('.letter').classList.add('letter--open');
    }
});

document.querySelector('.paper-close').addEventListener('click', function(){   
    document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');
    setTimeout(function(){
        document.querySelector('.letter').classList.remove('letter--close');
    }, 600);
});

// Valentine response functions
function showYesResponse() {
    const modal = document.getElementById('responseModal');
    const title = document.getElementById('responseTitle');
    const message = document.getElementById('responseMessage');
    
    title.innerHTML = '💖 YES! 💖';
    message.innerHTML = `
        <img src="/Users/allen/Documents/Vibe Coding/Valentine/bubu-bubu-dudu.gif" alt="Celebration GIF" style="max-width: 100%; height: auto; border-radius: 10px; margin: 20px 0;">
        <br>
        I'm so happy you said yes! 💕<br><br>
        Thank you for being my Valentine! 🌹
    `;
    
    modal.style.display = 'block';
    
    // Add celebration animation
    createConfetti();
}

function showMaybeResponse() {
    const modal = document.getElementById('responseModal');
    const title = document.getElementById('responseTitle');
    const message = document.getElementById('responseMessage');
    
    title.innerHTML = '🤔 Maybe? 🤔';
    message.innerHTML = `
        I understand you need time to think! 💭<br><br>
        I'll wait patiently for your answer.<br><br>
        Just know that my feelings for you are genuine and I'll always be here for you.<br><br>
        Take your time, my heart is yours whenever you're ready! 💝
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('responseModal').style.display = 'none';
}

// Run away function for the "No" button
function runAway() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate random position to move to
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();
    
    // Get random position within the container bounds
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Move the button to the random position
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('responseModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Confetti animation for "Yes" response
function createConfetti() {
    const colors = ['#ff6b9d', '#e74c3c', '#f39c12', '#e67e22', '#9b59b6', '#3498db'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
}

// Add confetti animation CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add heart beat effect to title
    const title = document.querySelector('.title');
    title.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
    });
    
    title.addEventListener('animationend', function() {
        this.style.animation = 'pulse 2s ease-in-out infinite';
    });
    
    // Add sparkle effect to envelope on hover
    const envelope = document.querySelector('.envelope');
    envelope.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 30px rgba(243, 99, 99, 0.6)';
    });
    
    envelope.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
    
    if (event.key === 'Enter' && document.querySelector('.letter').classList.contains('letter--open')) {
        showYesResponse();
    }
}); 
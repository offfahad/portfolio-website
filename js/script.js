function runTypingEffect(){
    const text = 'I am Fahad.'
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 200;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay){
    for (let index = 0; index < text.length; index++) {
        setTimeout(() => {
          typingElement.textContent += text.charAt(index);  
        }, delay * index);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');

setTimeout(() => {
    message1.style.display = 'none';
    message2.style.display = 'block';
}, 2000); // Display "Miss you" after 2 seconds (2000 milliseconds)

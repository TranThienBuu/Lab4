const greetings = [
    "Xin chào!",
    "Hello!",
    "Bonjour!",
    "Hola!",
    "Ciao!",
    "Привет!",
    "こんにちは!",
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("greeting").textContent = randomGreeting;
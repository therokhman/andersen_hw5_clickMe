const button = document.querySelector('#clickButton');

function getRandomPosition() {
    const screenWidth = window.innerWidth - button.clientWidth;
    const screenHeight = window.innerHeight - button.clientHeight;
    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * screenHeight);
    return {
        left: randomX,
        top: randomY
    };
}

function toggleButton() {
    const random = Math.random();
    if (random < 0.5) {
        const position = getRandomPosition();
        button.style.left = position.left + "px";
        button.style.top = position.top + "px";
    }
}

let count = 0;
button.addEventListener("mouseover", toggleButton);
button.addEventListener("click", () => {
    button.innerText = `Count: ${++count}`;
    toggleButton();
});

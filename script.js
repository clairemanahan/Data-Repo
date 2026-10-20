const horse = document.getElementById("horse");

horse.addEventListener('click', function() {
    horse.style.transform = "translateX(100%)";
    console.log("Horse moves!");
    horse.classList.add('is-animating');
});

horse.addEventListener('animationend', () => {
  horse.classList.remove('is-animating');
  console.log("Horse stopped moving!");
});

//i have no idea what im doing but i know its not working #plzsendhelp//
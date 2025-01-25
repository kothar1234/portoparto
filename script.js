// Hämta checkboxen (växlaren) och lägg till eventlyssnare för temaväxling
var checkbox = document.getElementById('switch');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        document.body.classList.add('light-theme');  // Växla till ljust tema
    } else {
        document.body.classList.remove('light-theme');  // Tillbaka till mörkt tema
    }
});

// Menyhantering
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const goBackButton = document.getElementById('goBack');

// Visa menyn när du klickar på menyns ikon
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Växla mellan synlig/dold meny
});

// Stäng menyn när du klickar på "Stäng Meny"
goBackButton.addEventListener('click', () => {
    navbar.classList.remove('active'); // Göm menyn
});

// Ordanimation
const words = ['Web Designer', 'UX Designer', 'Front End Developer', 'Software Tester'];
let index = 0;

function changeWord() {
    const span = document.querySelector('.text-animation span');
    span.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeWord, 3000); // Byt ord var 3:e sekund

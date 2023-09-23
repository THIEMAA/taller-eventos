const divButtonContainer = document.getElementById('buttonContainer');
const saludarButton = document.getElementById('saludarButton');


saludarButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento se propague al div
    alert('Hola! Soy el botón');
});


divButtonContainer.addEventListener('click', function() {
    alert('Hola! Soy el div');
});
// JavaScript para tornar o botão de confirmação responsivo
const submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Obrigado por confirmar sua presença!');
    form.reset();
});
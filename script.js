document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert("Você será redirecionado para a página de compra do produto.");
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-agenda');
    const tbody = document.querySelector('table tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('numero-telefone').value;

        if (nome.trim() === '' || telefone.trim () === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
        `;

        newRow.classList.add('contato');

        tbody.appendChild(newRow);

        form.reset();
    });
});
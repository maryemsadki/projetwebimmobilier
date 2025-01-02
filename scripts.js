document.addEventListener('DOMContentLoaded', () => {
    // Gestion des boutons de quantité (+ et -)
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', event => {
            const row = event.target.closest('tr');
            const quantityElement = row.querySelector('.quantity');
            const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('DT', '').trim());
            let quantity = parseInt(quantityElement.textContent);

            // Incrémente ou décrémente la quantité
            if (event.target.textContent === '+' && quantity < 99) {
                quantity++;
            } else if (event.target.textContent === '-' && quantity > 1) {
                quantity--;
            }

            // Mise à jour de la quantité et du total de la ligne
            quantityElement.textContent = quantity;
            row.querySelector('td:nth-child(4)').textContent = (price * quantity).toFixed(2) + 'DT';

            updateGrandTotal(); // Mise à jour du total général
        });
    });

    // Gestion des boutons de suppression
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', event => {
            const row = event.target.closest('tr');
            row.remove(); // Suppression de la ligne
            updateGrandTotal(); // Mise à jour du total général
        });
    });

    // Met à jour le total général
    function updateGrandTotal() {
        let grandTotal = Array.from(document.querySelectorAll('td:nth-child(4)'))
            .reduce((total, cell) => total + parseFloat(cell.textContent.replace('DT', '').trim()), 0);

        // Mise à jour dans le résumé
        const grandTotalElement = document.querySelector('.summary p:nth-child(3) span');
        if (grandTotalElement) {
            grandTotalElement.textContent = grandTotal.toFixed(2) + 'DT';
        }
    }
});

    document.querySelector('.payment-btn').addEventListener('click', function() {
        document.getElementById('payment-form').style.display = 'block'; // Afficher le formulaire de paiement
    });

    function closePaymentForm() {
        document.getElementById('payment-form').style.display = 'none'; // Masquer le formulaire de paiement
    }



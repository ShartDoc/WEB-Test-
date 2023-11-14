document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    const sizeSelect = document.getElementById('sizeSelect');
    const toppingSelect = document.getElementById('toppingSelect');
    const checkoutButton = document.getElementById('checkoutButton');

    function checkSelections() {
        if (sizeSelect.value && toppingSelect.value && flavorList.querySelector('.selected')) {
            checkoutButton.disabled = false;
        } else {
            checkoutButton.disabled = true;
        }
    }

    sizeSelect.addEventListener('change', checkSelections);
    toppingSelect.addEventListener('change', checkSelections);
    flavorList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            document.querySelectorAll('#flavorList li').forEach(li => li.classList.remove('selected'));
            event.target.classList.add('selected');
            checkSelections();
        }
    });

    checkoutButton.addEventListener('click', function() {
        window.location.href = 'order-placed.html'; // Redirect to orders placed page
    });
});

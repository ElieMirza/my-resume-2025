document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });

    // Theme toggle
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Toggle Theme';
    themeToggle.classList.add('mt-4', 'bg-gray-500', 'text-white', 'py-2', 'px-4', 'rounded');
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('bg-white');
        document.body.classList.toggle('bg-gray-900');
        document.body.classList.toggle('text-gray-900');
        document.body.classList.toggle('text-white');
    });
}); 
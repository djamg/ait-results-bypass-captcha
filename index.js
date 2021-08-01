const form = document.getElementById('get_usn');

form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    console.log(form);
});
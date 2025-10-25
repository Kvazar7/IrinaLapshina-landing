document.addEventListener("DOMContentLoaded", function() {
    const includes = document.querySelectorAll('include');
    includes.forEach(include => {
        const src = include.getAttribute('src');
        fetch(src)
            .then(response => response.text())
            .then(data => {
                include.insertAdjacentHTML('afterend', data);
                include.remove();
            });
    });
});
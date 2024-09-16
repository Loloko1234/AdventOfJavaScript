document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.question');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            let liElement = element.closest('li');
            if (element.classList.contains('close')) {
                element.classList.remove('close');
                if (liElement) {
                    liElement.classList.remove('expand');
                }
            } else {
                element.classList.add('close'); 
                if (liElement) {
                    liElement.classList.add('expand');
                }
            }
        });
    });
});

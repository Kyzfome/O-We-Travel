document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert("Будь ласка, заповніть всі поля форми.");
            return; 
        }
        
        
        alert("Дякуємо, " + name + "! Ваше повідомлення успішно відправлено.");
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
});

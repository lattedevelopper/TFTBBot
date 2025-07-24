// Избранное
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        this.innerHTML = this.classList.contains('active') 
            ? '<i class="fas fa-heart"></i>' 
            : '<i class="far fa-heart"></i>';
    });
});

// Клик по карточке (можно добавить переход на детальную страницу)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.favorite-btn')) {
            window.location.href = 'product-detail.html';
        }
    });
});

// Навигация
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

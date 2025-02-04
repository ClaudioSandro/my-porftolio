function filterProjects(platform) {
    var cards = document.querySelectorAll('.project-card');
    cards.forEach(function(card) {
        if (platform === 'all' || card.classList.contains(platform)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
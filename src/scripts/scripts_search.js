window.addEventListener('click', function(event) {
    if (event.target.dataset.action === "like") {
        const block = event.target.closest('.location__block');
        const likeButton = block.getElementsByClassName('location__like_button')[0];
    
        // Изменяем фоновое изображение при клике
        if (likeButton.style.backgroundImage == 'url("../../img/icons/like.svg")') {
            likeButton.style.backgroundImage = 'url("../../img/icons/unlike.svg")';
        }
        else {
            likeButton.style.backgroundImage = 'url("../../img/icons/like.svg")';
        }
    }
    if (event.target.dataset.action === "choose_location") {
        const block = event.target.closest('.location__block');
        const location = block.getElementsByClassName('location__address')[0];
        const address = location.querySelector('p')
        sessionStorage.setItem('address', address.innerText);
    }
});
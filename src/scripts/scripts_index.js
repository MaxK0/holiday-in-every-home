const images = [
    "../../img/locations/location1.jpg",
    "../../img/locations/location2.jpg",
    "../../img/locations/location3.jpeg",
    "../../img/locations/location4.jpg",
    "../../img/locations/location5.jpg"
];

let currentIndex = 0;
const totalImages = images.length;
const currentIndexes = [0, 1, 2];

function changeImage(direction) {
    for (let i = 0; i < 3; i++) {      
        currentIndexes[i] += direction;
        currentIndex = currentIndexes[i];

        if (currentIndex < 0) currentIndex = totalImages - 1;
        else if (currentIndex >= totalImages) currentIndex = 0;
        

        const photo = document.getElementById("photo_" + (i + 1));

        photo.setAttribute('src', images[currentIndex]);

        currentIndexes[i] = currentIndex;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form_search = document.querySelector('.search__form');
    form_search.addEventListener('submit', function(event) {
        // Предотвращаем отправку формы по умолчанию
        event.preventDefault();

        // Проверка даты
        const dateInput = document.getElementById('search__form_date');
        const enteredDate = new Date(dateInput.value);
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + 0.9);
        const maxDate = new Date('2025-01-01');        

        if (enteredDate < startDate || enteredDate > maxDate) {
            alert('Введите дату от завтрашнего дня до 2025 года.');
            return;
        }

        // Проверка количества людей
        const peopleInput = document.getElementById('search__form_people');
        const enteredPeople = parseInt(peopleInput.value, 10);

        if (isNaN(enteredPeople) || enteredPeople < 1 || enteredPeople > 50) {
            alert('Введите количество людей от 1 до 50.');
            return;
        }

        const regionInput = document.getElementById('search__form_region');

        //Сохраняем данные в sessionStorage
        sessionStorage.setItem('date', dateInput.value);
        sessionStorage.setItem('people', peopleInput.value)
        sessionStorage.setItem('region', regionInput.value)

        // Если все проверки пройдены, можно отправить форму
        form_search.submit();
    });
});
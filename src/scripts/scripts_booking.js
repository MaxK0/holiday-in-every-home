document.addEventListener('DOMContentLoaded', function() {
    const form_booking = document.querySelector('.booking__form');
    //Заполняем данные из sessionStorage
    const region = sessionStorage.getItem('region');
    const date = sessionStorage.getItem('date');
    const people = sessionStorage.getItem('people');
    const address = sessionStorage.getItem('address');

    if (region) document.getElementById('booking__form_region').value = region;
    if (date) document.getElementById('booking__form_date').value = date;
    if (people) document.getElementById('booking__form_people').value = people;
    if (address) document.getElementById('booking__form_location').value = address;

    form_booking.addEventListener('submit', function(event) {
        // Предотвращаем отправку формы по умолчанию
        event.preventDefault();

        // Проверка даты
        const dateInput = document.getElementById('booking__form_date');
        const enteredDate = new Date(dateInput.value);
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 0.9);
        const maxDate = new Date('2025-01-01');

        if (enteredDate < currentDate || enteredDate > maxDate) {
            alert('Введите дату от завтрашнего дня до 2025 года.');
            return;
        }

        // Проверка количества людей
        const peopleInput = document.getElementById('booking__form_people');
        const enteredPeople = parseInt(peopleInput.value, 10);

        if (isNaN(enteredPeople) || enteredPeople < 1 || enteredPeople > 50) {
            alert('Введите количество людей от 1 до 50.');
            return;
        }

        // Если все проверки пройдены, можно отправить форму
        form_booking.submit();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const priceInput = document.getElementById('price'); // pole na kwotę
    const peopleInput = document.getElementById('people'); // pole na ilość osób
    const tipSelect = document.getElementById('tip'); // wybór napiwku
    const calculateButton = document.querySelector('.count'); // przycisk "Oblicz"
    const errorElement = document.querySelector('.error'); // miejsce na błędy
    const costInfo = document.querySelector('.cost-info'); // miejsce na wynik
    const costSpan = document.querySelector('.cost'); // miejsce na kwotę na osobę

    calculateButton.addEventListener('click', () => {
        validateInputs(priceInput, peopleInput, tipSelect, errorElement, costInfo, costSpan);
    });
});


const validateInputs = (priceInput, peopleInput, tipSelect, errorElement, costInfo, costSpan) => {
    const price = parseFloat(priceInput.value.trim());
    const people = parseInt(peopleInput.value.trim());
    const tip = parseFloat(tipSelect.value);


    if (isNaN(price) || price <= 0) {
        errorElement.textContent = 'Wprowadź poprawną kwotę do zapłaty.';
        costInfo.style.display = 'none';
        return;
    }

    if (isNaN(people) || people <= 0) {
        errorElement.textContent = 'Wprowadź poprawną liczbę osób.';
        costInfo.style.display = 'none';
        return;
    }

    if (isNaN(tip)) {
        errorElement.textContent = "Wybierz poprawny napiwek.";
        costInfo.style.display = "none";
        return;
    }

    errorElement.textContent = ''
    calculateBill(price, people, tip, costSpan);
    costInfo.style.display = 'block'
}

function calculateBill(price, people, tip, costSpan) {
    const total = price + (price * tip);
    const perPerson = total / people;
    costSpan.textContent = perPerson.toFixed(2);
}


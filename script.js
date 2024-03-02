const form = document.getElementById('form');
const success = document.getElementById('success');
const submitBtn = document.getElementById('submit-btn');
const formContainer = document.getElementById('form-container');

const showSuccessCard = (e) => {
    e.preventDefault();
    formContainer.hidden = true;
    success.hidden = false;
}

form.addEventListener('submit', showSuccessCard)

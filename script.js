const form = document.getElementById('form');
const success = document.getElementById('sucess');
const submitBtn = document.getElementById('submit-btn')

success.hidden = true
submitBtn.addEventListener('click', showSuccess)

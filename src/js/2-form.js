const formElem = document.querySelector('.feedback-form');
const inputElem = document.querySelector('.feedback-form input');
const textareaElem = document.querySelector('.feedback-form textarea');
const formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state') === null) {
  inputElem.value = '';
  textareaElem.value = '';
} else {
  inputElem.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  textareaElem.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

formElem.addEventListener('input', e => {
  e.preventDefault();

  formData.email = formElem.elements.email.value;
  formData.message = formElem.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  if (
    formElem.elements.email.value === '' ||
    formElem.elements.email.value === ''
  ) {
    alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formElem.reset();
});

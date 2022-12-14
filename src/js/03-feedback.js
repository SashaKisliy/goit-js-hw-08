import throttle from "lodash.throttle";

const FEEDBACK = "feedback-form-state";
// let formData = {};


const input = document.querySelector('input');
const textArea = document.querySelector('textarea')
const form = document.querySelector('.feedback-form');

populuteForm();

form.addEventListener('input', inputOnForm);
form.addEventListener('submit', submitForm)


function inputOnForm(e) {
    const {
        email,
        message
    } = e.currentTarget.elements

    const dataForm = {
        email: email.value,
        message: message.value
    }

    // formData[e.target.name] = e.target.value;

    const dataString = JSON.stringify(dataForm);


    localStorage.setItem(FEEDBACK, dataString);
    console.log(dataString);
}

function submitForm(e) {
        // if (input.value === '' || textArea.value === '') {
        //     return prompt('Не все поля заполнены')
        // }
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(FEEDBACK);
}

function populuteForm() {
    const savedForm = JSON.parse(localStorage.getItem(FEEDBACK));
    if (savedForm) {
        console.log(savedForm);
        input.value = savedForm.email;
        textArea.value = savedForm.message;
    }
}



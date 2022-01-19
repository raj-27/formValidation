let email = document.getElementById('email');
let password = document.getElementById('password');
let Form = document.getElementById('Form');
let message = document.querySelector('.message');
let submitBtn = document.getElementById('submitbtn');
let formalert = document.querySelector('.formalert')
let emailValid = false;
let passValid = false;


email.addEventListener('blur', (e) => {
    let emailRegex = /^([_\.\-\w]+)@([_\.\-\w]+)\.([a-zA-Z]){2,6}$/;
    if (emailRegex.test(email.value)) {
        emailValid = true;
        email.classList.remove('is-invalid');
    } else {
        email.classList.add('is-invalid');
    }
})

password.addEventListener('blur', (e) => {
    let passRegex = /^[a-zA-Z][a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/;
    if (passRegex.test(password.value)) {
        passValid = true;
        password.classList.remove('is-invalid');
    } else {
        password.classList.add('is-invalid');
    }
})

Form.addEventListener('submit', async function(e) {
    if (emailValid && passValid) {
        showAlert('alert-success', 'show')
        postData(email, password)
        console.log('everything good');
    }
  
    e.preventDefault();
})



async function showAlert(alertColor, visibility) {
    formalert.classList.add(alertColor);
    formalert.classList.add(visibility);
    setTimeout(() => {
        formalert.classList.remove(alertColor);
        formalert.classList.remove(visibility);
    }, 2000);
}

async function postData(email, password) {
  
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    let jsondata = await response.json();
    console.log(jsondata);
  
}
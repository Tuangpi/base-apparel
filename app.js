let email = document.querySelector('.email');
let form = document.querySelector('.form');
let error = document.querySelector('.error')
let icon_error = document.querySelector('.icon_error')
form.addEventListener("submit", check);
function check(e){
    e.preventDefault();
    let emailValue = email.value;
    let exp = /@[\w]/;
    if(!exp.test(emailValue)){
        email.style.border = '2px solid hsl(0, 93%, 68%)';
        email.style.marginBottom = '0rem';
        icon_error.style.visibility = 'visible'
        error.innerHTML = 'Please provide a valid email';
    }else{
        error.innerHTML = '';
        email.style.border = '1.8px solid hsl(0, 36%, 70%)'
        error.style.marginBottom = '4.2rem';
        icon_error.style.visibility = 'hidden'
    }
}
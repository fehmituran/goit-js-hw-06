
const form = document.querySelector(".login-form")

form.addEventListener("submit", formSubmit);


function formSubmit(event) {
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget;

    if(email.value === "" || password.value === "" ) {
        return alert("all fields must be filled in");
    }

    const data = {email: email.value, password: password.value};
    console.log(data);
    event.currentTarget.reset();

}

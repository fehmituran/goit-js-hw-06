const nameinput = document.querySelector('#name-input');
const nameoutput = document.querySelector('#name-output');


  nameinput.addEventListener("input", (event) => {
    nameoutput.textContent = event.currentTarget.value;
    
    if (nameoutput.textContent == "") {
        nameoutput.textContent = "Anonymous"
    } 
  })
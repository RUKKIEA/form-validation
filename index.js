const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const addressInput = document.querySelector('#address');
const sexInput = document.querySelector('#sex');
const occupationInput = document.querySelector('#occupation');
const hobbiesInput = document.querySelector('#hobbies');
const ul = document.createElement("ul");
const div = document.createElement("div");
const resultContainer = document.querySelector('#result-container');


myForm.addEventListener('submit', function(event) {
 event.preventDefault();
 
 if (nameInput.value === "" || emailInput.value === "") {
     const msg = document.createElement('p');
     msg.classList.add('error');
     msg.innerHTML = "Please fill out all required fields";
     document.body.appendChild(msg);
     setTimeout(() => msg.remove(), 3000);
 } else {
     const ul = document.createElement('ul');
     
     const result = `
         <li>Name: ${nameInput.value}</li>
         <li>Email: ${emailInput.value}</li>
         <li>Phone: ${phoneInput.value}</li>
         <li>Address: ${addressInput.value}</li>
         <li>Sex: ${sexInput.value}</li>
         <li>Occupation: ${occupationInput.value}</li>
         <li>Hobbies: ${hobbiesInput.value}</li>
         <br>
     `;
     ul.innerHTML = result;

     const cancel = document.createElement('button')
cancel.className = "cancel-btn  delete"
cancel.type = "delete"
cancel.appendChild(document.createTextNode('X'))
cancel.addEventListener('click', function() {
 // if (e) {
  if (confirm("are you sure you want to delete this? ") === true) {
   resultContainer.removeChild(ul);
  } else{
  }
 // }
})

ul.appendChild(cancel);

 resultContainer.appendChild(ul);
     myForm.reset();
 }
});



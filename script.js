const form = document.getElementById("form");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const message = document.getElementById("long-text");
const checkbox = document.getElementById("checkbox");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  name1_error.innerHTML = "";
  name2_error.innerHTML = "";
  email_error.innerHTML = "";
  message_error.innerHTML = "";

  let valid = true;

  if (Fname.value.trim() === "") {
    name1_error.innerHTML = "This input is required";
    valid = false;
  } 
  if (Lname.value.trim() === "") {
    name2_error.innerHTML = "The input is required";
    valid = false;
  } 
  if (!emailPattern.test(email.value.trim())) {
    email_error.innerHTML = "Please enter a valid email address";
    valid = false;
  }
  if(message.value.trim() === ""){
    message_error.innerHTML = "This field is required";
    valid = false;
  }
  if(!checkbox.checked){
    checkbox_error.innerHTML = "To submit this form, please consent to being contacted";
    valid = false;
  }
  if(!radio1.checked && !radio2.checked){
    radio_error.innerHTML = "Please select a query type";
    valid = false;
  }
  if(!valid){
    e.preventDefault();
  }
});

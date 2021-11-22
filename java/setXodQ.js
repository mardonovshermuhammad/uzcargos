const nameInput = document.getElementById("name"),
      curnameInput = document.getElementById("surname"),
      PhoneInput = document.getElementById("Phone"),
      MenQInput = document.getElementById("MenQ")


nameInput.addEventListener("input", function (e) {
    const name = e.target.value;
    const regexName = /^[A-Z][a-z]{2,20}$/;
    console.log(regexName.test(name));
  
    if (regexName.test(name)) {
      nameInput.classList.remove("is-invalid");
      nameInput.classList.add("is-valid");
    } else {
      nameInput.classList.add("is-invalid");
      nameInput.classList.remove("is-valid");
    }
})
curnameInput.addEventListener("input", function (e) {
    const name = e.target.value;
    const regexName = /^[A-Z][a-z]{2,20}$/;
    console.log(regexName.test(name));
  
    if (regexName.test(name)) {
      curnameInput.classList.remove("is-invalid");
      curnameInput.classList.add("is-valid");
    } else {
      curnameInput.classList.add("is-invalid");
      curnameInput.classList.remove("is-valid");
    }
})
PhoneInput.addEventListener("input", function (e) {
    const name = e.target.value;
    const regexphone = /^[0-9]{7}$/i;
    console.log(regexphone.test(name));
  
    if (regexphone.test(name)) {
      PhoneInput.classList.remove("is-invalid");
      PhoneInput.classList.add("is-valid");
    } else {
      PhoneInput.classList.add("is-invalid");
      PhoneInput.classList.remove("is-valid");
    }
    
})
MenQInput.addEventListener("submit", function (e) {
    e.preventDefault();
    
})
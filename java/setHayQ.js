const nameInput = document.getElementById("name"),
      curnameInput = document.getElementById("surname"),
      PhoneInput = document.getElementById("Phone"),
      MenQInput = document.getElementById("MenQ"),
      Passport = document.getElementById("Passport"),
      guvohnomaHay = document.getElementById("guvohnomaHay"),
      fileSelect = document.getElementById("fileSelect"),
      fileElem = document.getElementById("fileElem"),
      fileList = document.getElementById("fileList"),
      imgdelete = document.querySelector(".imgdelete"),
      fileSelectHay = document.getElementById("fileSelectHay"),
      fileElemHay = document.getElementById("fileElemHay"),
      fileListHay = document.getElementById("fileListHay"),
      imgdeleteHay = document.querySelector(".imgdeleteHay");


fileSelect.addEventListener("click", function (e) {
      if (fileElem) {fileElem.click();}
      e.preventDefault();
});
fileElem.addEventListener("change", handleFiles);
function handleFiles(e) {
  let  file = e.target.files[0]; 
  let url = URL.createObjectURL(file);
               console.log(url);
        let addTasks = `
         <div style="position: relative;" class="ml-2"> <img class="rasm"
         src="${url}" alt=""> <a href="#"><i class="fas fa-trash-alt text-danger" style="position:
         absolute; right: 10px; bottom: 5px;"></i></a></div>`;
         fileList.insertAdjacentHTML("beforeend", addTasks);
}


fileSelectHay.addEventListener("click", function (e) {
  if (fileElemHay) {fileElemHay.click();}
  e.preventDefault();
});
fileElemHay.addEventListener("change", handleFiless);
function handleFiless(e) {
let  file = e.target.files[0]; 
let url = URL.createObjectURL(file);
    let addTasks = `
     <div style="position: relative;" class="ml-2"> <img class="rasm"
     src="${url}" alt=""> <a href="#"><i class="fas fa-trash-alt text-danger" style="position:
     absolute; right: 10px; bottom: 5px;"></i></a></div>`;
     fileListHay.insertAdjacentHTML("beforeend", addTasks);
}







nameInput.addEventListener("input", function (e) {
    const name = e.target.value;
    const regexName = /^[A-Z][a-z]{2,20}$/;
  
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
  
    if (regexphone.test(name)) {
      PhoneInput.classList.remove("is-invalid");
      PhoneInput.classList.add("is-valid");
    } else {
      PhoneInput.classList.add("is-invalid");
      PhoneInput.classList.remove("is-valid");
    }
    
})
Passport.addEventListener("input", function (e) {
    const name = e.target.value;
    const regexphone = /^([A-Z]{2})([0-9]{7})$/;
  
    if (regexphone.test(name)) {
      Passport.classList.remove("is-invalid");
      Passport.classList.add("is-valid");
    } else {
      Passport.classList.add("is-invalid");
      Passport.classList.remove("is-valid");
    }
    
})
guvohnomaHay.addEventListener("input", function (e) {
    const name = e.target.value;
    const regexphone = /^([A-Z]{2})([0-9]{7})$/;
  
    if (regexphone.test(name)) {
     guvohnomaHay.classList.remove("is-invalid");
     guvohnomaHay.classList.add("is-valid");
    }
     else {
     guvohnomaHay.classList.add("is-invalid");
     guvohnomaHay.classList.remove("is-valid");
    } 
  })
  imgdelete.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("fa-trash-alt")) {
      e.target.parentElement.parentElement.remove();
    }
  });
  imgdeleteHay.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("fa-trash-alt")) {
      e.target.parentElement.parentElement.remove();
    }
  });
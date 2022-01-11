const addTask = document.querySelector(".add-field"),
  addTask2 = document.querySelector(".add-field2"),
  addTask3 = document.querySelector(".add-field3"),
  additional = document.querySelector(".additional"),
  additional2 = document.querySelector(".additional2"),
  mashina_turi = document.querySelector(".mashina_turi"),
  removetask = document.querySelector(".additional"),
  removetask2 = document.querySelector(".additional2"),
  removetask3 = document.querySelector(".mashina_turi"),
  qoshimchaYre = document.querySelector(".boshqatranssss"),
  yuklashturiRemove = document.querySelector(".yuklashturiRemove"),
  tushurishturiRemove = document.querySelector(".tushurishturiRemove"),
  documRemove = document.querySelector(".documRemove"),
  removehajm = document.querySelector(".removehajm"),
  removetolov = document.querySelector(".removetolov"),
  kantakremove = document.querySelector(".kantakremove")
  chekTasks = document.querySelectorAll(".chekTask"),
  clearr = document.querySelector(".clearr"),
  yuklashTuriBox = document.querySelector(".yuklashturi"),
  tushirishTuriBox = document.querySelector(".tushurishturi"),
  yuklashTuri = document.querySelector(".yuklashjoyi"),
  tushrishTuri = document.querySelector(".tushrishjoyi"),
  qoshimchaYuk = document.querySelector(".qoshimchayuk"),
  boshqaTrans = document.querySelector(".boshqatrans"),
  documentLar = document.querySelector(".documentlar"),
  docum = document.querySelector(".docum"),
  uzunTog = document.getElementById("uzuntog"),
  taskinput = document.getElementById("exampleInputEmail1"),
  taskinput2 = document.getElementById("exampleInputEmail2"),
  taskinput3 = document.getElementById("exampleInputEmail3"),
  taskinput4 = document.getElementById("exampleInputEmail178"),
  taskinput5 = document.getElementById("exampleInputEmail278"),
  taskinput6 = document.getElementById("exampleInputEmail378"),
  hajmdichiqarish = document.getElementById("hajmdichiqarish"),
  tolovbos = document.querySelector(".tolovbos"),
  tolovlarquti = document.querySelector(".tolovlarquti"),
  kantaksum = document.querySelector(".kantaksum"),
  qoshimchakantaklarniyigish = document.querySelector(".qoshimchakantaklarniyigish"),
  closeQy = document.querySelector(".closeQy"),
  jonatish = document.querySelector(".jonatish");

  uzunTog.addEventListener("click", function (e) {

   document.querySelectorAll('.hajmremove').forEach(function (taskItem) {
    taskItem.remove();
  })
  
    let taskvalue = taskinput.value;
    let taskvalue2 = taskinput2.value;
    let taskvalue3 = taskinput3.value;

  

    if (taskvalue != '' && taskvalue > 0) {
      let addTask = `
      <div class="col-lg-3 col-md-4 col-sm-6 hajmremove ">
      <div class="card d-flex position-relative">
      <div class="davrillik position-relative">
      <h6 class=" position-absolute ml-3">Uzunligi</h6>
        <div class="mt-3 ml-3"> ${taskvalue}</div>
      </div>
      <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
      </div>
      </div>
      `; 
      hajmdichiqarish.insertAdjacentHTML("beforeend", addTask);
      taskinput.value = '';
       
    }
    if (taskvalue2 != ''  && taskvalue2 > 0) {
      let addTask = `
      <div class="col-lg-3 col-md-4 col-sm-6 hajmremove ">
      <div class="card d-flex position-relative">
      <div class="davrillik position-relative">
      <h6 class=" position-absolute ml-3">Balandligi</h6>
        <div class="mt-3 ml-3"> ${taskvalue2}</div>
      </div>
      <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
      </div>
      </div>
      `; 
      hajmdichiqarish.insertAdjacentHTML("beforeend", addTask);
      taskinput2.value = '';
      
    }
    if (taskvalue3 != ''  && taskvalue3 > 0) {
      let addTask = `
      <div class="col-lg-3 col-md-4 col-sm-6 hajmremove ">
      <div class="card d-flex position-relative">
      <div class="davrillik position-relative">
      <h6 class=" position-absolute ml-3">eni</h6>
        <div class="mt-3 ml-3"> ${taskvalue3}</div>
      </div>
      <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
      </div>
      </div>
      `; 
      hajmdichiqarish.insertAdjacentHTML("beforeend", addTask);
      taskinput3.value = '';
    }
   
  
  })
  kantaksum.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll('.hajmremove').forEach(function (taskItem) {
      taskItem.remove();
    })
    
      let taskvalue4 = taskinput4.value;
      let taskvalue5 = taskinput5.value;
      let taskvalue6 = taskinput6.value;
  
    
  
      if (taskvalue4 != '') {
        let addTask = `
        <div class="col-lg-3 col-md-4 col-sm-6 hajmremove ">
        <div class="card d-flex position-relative">
        <div class="davrillik position-relative">
        <h6 class=" position-absolute ml-3">Telegram</h6>
          <div class="mt-3 ml-3"> ${taskvalue4}</div>
        </div>
        <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
        </div>
        </div>
        `; 
        qoshimchakantaklarniyigish.insertAdjacentHTML("beforeend", addTask);
         
      }
      if ( taskvalue5 != '') {
        let addTask = `
        <div class="col-lg-3 col-md-4 col-sm-6 hajmremove ">
        <div class="card d-flex position-relative">
        <div class="davrillik position-relative">
        <h6 class=" position-absolute ml-3">Whatsapp</h6>
          <div class="mt-3 ml-3"> ${ taskvalue5}</div>
        </div>
        <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
        </div>
        </div>
        `; 
        qoshimchakantaklarniyigish.insertAdjacentHTML("beforeend", addTask);
        
      }
      if (taskvalue6 != '') {
        let addTask = `
        <div class="col-lg-3 col-md-4 col-sm-6 hajmremove ">
        <div class="card d-flex position-relative">
        <div class="davrillik position-relative">
        <h6 class=" position-absolute ml-3">Viber</h6>
          <div class="mt-3 ml-3"> ${taskvalue6}</div>
        </div>
        <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
        </div>
        </div>
        `; 
        qoshimchakantaklarniyigish.insertAdjacentHTML("beforeend", addTask);
      }
    
  })

addTask.addEventListener("click", function (e) {
  let addTask = `<div class="input-div" style="position: relative;">
    <input type="text"  class="form-control" id="from-place"
   placeholder="Yuklash vaqti" required>
<a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
</div>`;
  additional.insertAdjacentHTML("beforeend", addTask);
});

addTask2.addEventListener("click", function (e) {
  let addTask = `<div class="input-div2" style="position: relative;">
    <input type="text"  class="form-control" id="to-place"
        placeholder="Yuklash vaqti" required>
    <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
</div> `;
  additional2.insertAdjacentHTML("beforeend", addTask);
});

addTask3.addEventListener("click", function (e) {
  let addTask = `<div class="position-relative d-flex">
  <input type="text" list="from-place-data" class="form-control" id="from-place"
      placeholder="Transport turi">
  <datalist id="from-place-data">
      <option value="1">
      <option value="2">
      <option value="3">
  </datalist>
  <a href="#"><i class="fas fa-trash-alt text-danger position-absolute mt-4 ml-2 "></i></a>
</div> `;
    mashina_turi.insertAdjacentHTML("beforeend", addTask);
});

chekTasks.forEach((checkTask) => {
  checkTask.addEventListener("click", function (e) {
    if (e.target.classList.contains("chekTask")) {
      let www =
        e.target.nextElementSibling;
      www.classList.toggle("text-info");
    }
  });
});

tushrishTuri.addEventListener("click", function (e) {
  document.querySelectorAll('.tushurishremove').forEach(function (taskItem) {
    taskItem.remove();
  })
  let timeRadios = document.getElementsByName("inlineRadioOptions1");
  let timeRadiosyuk1 = document.getElementsByName("inlineRadioOptionsyuk1");
  let timeRadiosulanish = document.getElementsByName("inlineRadioOptionsulanish1");
  let timeRadiosvariant = document.getElementsByName("inlineRadioOptionsvariant1");
  let checkedRadio1;
  let checkedRadios11;
  let checkedRadioss11 = [];
  let checkedRadios22;
  let checkedRadioss22 = [];
  let checkedRadios33;
  let checkedRadioss33 = [];

  timeRadios.forEach(el => {
    if (el.checked) {
      checkedRadio1 = el;
    }
  });

  timeRadiosyuk1.forEach((check11)=>{
    if (check11.checked) {
     checkedRadios11 = check11.nextElementSibling.textContent;
     checkedRadioss11.push(checkedRadios11)
    }
   });
   
   timeRadiosulanish.forEach((check12)=>{
    if (check12.checked) {
      checkedRadios22 = check12.nextElementSibling.textContent;
      checkedRadioss22.push(checkedRadios22)
     
    }
  });
  timeRadiosvariant.forEach((check13)=>{
    if (check13.checked) {
      checkedRadios33 = check13.nextElementSibling.textContent;
      checkedRadioss33.push(checkedRadios33)
     
    }
  });

      checkedRadioss11.forEach((qq) =>{
        let addTask = `
        <div class="col-lg-3 col-md-4 col-sm-6 tushurishremove">
        <div class="card d-flex position-relative">
        <div class="davrillik position-relative">
        <h6 class=" position-absolute ml-3">yuklash</h6>
          <div class="mt-3 ml-3"> ${qq}</div>
        </div>
        <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
        </div>
        </div>`; 
        tushirishTuriBox.insertAdjacentHTML("beforeend", addTask);
    });

    checkedRadioss22.forEach((qqq) =>{
      let addTask = `
      <div class="col-lg-3 col-md-4 col-sm-6 tushurishremove">
      <div class="card d-flex position-relative">
      <div class="davrillik position-relative">
      <h6 class=" position-absolute ml-3">Ulanish_turi</h6>
        <div class="mt-3 ml-3"> ${qqq}</div>
      </div>
      <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
      </div>
      </div>`; 
      tushirishTuriBox.insertAdjacentHTML("beforeend", addTask);
    });

    checkedRadioss33.forEach((qqqq) =>{
      let addTask = `
      <div class="col-lg-3 col-md-4 col-sm-6 tushurishremove">
      <div class="card d-flex position-relative">
      <div class="davrillik position-relative">
      <h6 class=" position-absolute ml-3">Variantlar</h6>
        <div class="mt-3 ml-3"> ${qqqq}</div>
      </div>
      <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
      </div>
      </div>`; 
      tushirishTuriBox.insertAdjacentHTML("beforeend", addTask);
    });

    let wwww = checkedRadio1.nextElementSibling.textContent;
    let addTask = `
    <div class="col-lg-3 col-md-4 col-sm-6 tushurishremove">
    <div class="card d-flex position-relative">
      <div class="davrillik position-relative">
      <h6 class=" position-absolute ml-3"> Davriylik</h6>
        <div class="mt-3 ml-3"> ${wwww}</div>
      </div>
  <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
    </div>
    </div>`; 
    tushirishTuriBox.insertAdjacentHTML("beforeend", addTask);
    


})

yuklashTuri.addEventListener("click", function (e) {
  document.querySelectorAll('.yuklashremove').forEach(function (taskItem) {
    taskItem.remove();
})

  let timeRadios = document.getElementsByName("inlineRadioOptions");
  let timeRadiosyuk = document.getElementsByName("inlineRadioOptionsyuk");
  let timeRadiosulanish = document.getElementsByName("inlineRadioOptionsulanish");
  let timeRadiosvariant = document.getElementsByName("inlineRadioOptionsvariant");
  let checkedRadio;
  let checkedRadios1;
  let checkedRadioss1 = [];
  let checkedRadios2;
  let checkedRadioss2 = [];
  let checkedRadios3;
  let checkedRadioss3 = [];

  timeRadios.forEach(el => {
    if (el.checked) {
      checkedRadio = el;
    }
  });

  timeRadiosyuk.forEach((check)=>{
    if (check.checked) {
     checkedRadios1 = check.nextElementSibling.textContent;
     checkedRadioss1.push(checkedRadios1)
    }
})
timeRadiosulanish.forEach((check1)=>{
  if (check1.checked) {
    checkedRadios2 = check1.nextElementSibling.textContent;
    checkedRadioss2.push(checkedRadios2)
   
  }
})
timeRadiosvariant.forEach((check2)=>{
  if (check2.checked) {
    checkedRadios3 = check2.nextElementSibling.textContent;
    checkedRadioss3.push(checkedRadios3)
   
  }
});



   checkedRadioss1.forEach((eeee) =>{
    let addTask = `
    <div class="col-lg-3 col-md-4 col-sm-6 yuklashremove">
    <div class="card d-flex position-relative">
    <div class="davrillik position-relative">
    <h6 class=" position-absolute ml-3">yuklash</h6>
      <div class="mt-3 ml-3"> ${eeee}</div>
    </div>
    <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
    </div>
    </div>`; 
    yuklashTuriBox.insertAdjacentHTML("beforeend", addTask);
});
checkedRadioss2.forEach((eeeee) =>{
  let addTask = `
  <div class="col-lg-3 col-md-4 col-sm-6 yuklashremove">
  <div class="card d-flex position-relative">
  <div class="davrillik position-relative">
  <h6 class=" position-absolute ml-3">Ulanish_turi</h6>
    <div class="mt-3 ml-3"> ${eeeee}</div>
  </div>
  <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
  </div>
  </div>`; 
  yuklashTuriBox.insertAdjacentHTML("beforeend", addTask);
});

checkedRadioss3.forEach((eeeeee) =>{
  let addTask = `
  <div class="col-lg-3 col-md-4 col-sm-6 yuklashremove">
  <div class="card d-flex position-relative">
  <div class="davrillik position-relative">
  <h6 class=" position-absolute ml-3">Variantlar</h6>
    <div class="mt-3 ml-3"> ${eeeeee}</div>
  </div>
  <a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
  </div>
  </div>`; 
  yuklashTuriBox.insertAdjacentHTML("beforeend", addTask);
});


let www = checkedRadio.nextElementSibling.textContent;
let addTask = `
<div class="col-lg-3 col-md-4 col-sm-6 yuklashremove">
<div class="card d-flex position-relative">
  <div class="davrillik position-relative">
   <h6 class=" position-absolute ml-3"> Davriylik</h6>
    <div class="mt-3 ml-3"> ${www}</div>
  </div>
<a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
 </div>
 </div>`; 
 yuklashTuriBox.insertAdjacentHTML("beforeend", addTask);


})

qoshimchaYuk.addEventListener("click", function (e) {


    document.querySelectorAll('.qoshimcharemove').forEach(function (taskItem) {
    taskItem.remove();
})

  let checkboxes = document.getElementsByName("qoshish");
  let valuess;
  let values = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
     valuess = checkbox.nextElementSibling.textContent;
     values.push(valuess)
    } 
  });

values.forEach((eee) =>{
    let addTask = `
    <div class="col-lg-3 col-md-4 col-sm-6 qoshimcharemove ">
    <div class="card d-flex position-relative">
    <div class="davrillik position-relative">
    <h6 class=" position-absolute ml-3">Qo'shimcha_yuklash_joyi</h6>
      <div class="mt-3 ml-3"> ${eee}</div>
    </div>
    <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
    </div>
    </div>
    `; 
    boshqaTrans.insertAdjacentHTML("beforeend", addTask);

})

})

documentLar.addEventListener("click", function (e) {
  document.querySelectorAll('.documentsremove').forEach(function (taskItem) {
    taskItem.remove();
  })

  let checkboxes = document.getElementsByName("hujjatlar");
  let valuess;
  let values = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
     valuess = checkbox.nextElementSibling.textContent;
     values.push(valuess)
    } 
  });

values.forEach((eee) =>{
    let addTask = `
    <div class="col-lg-3 col-md-4 col-sm-6 documentsremove ">
    <div class="card d-flex position-relative">
    <div class="davrillik position-relative">
    <h6 class=" position-absolute ml-3">Hujjatlar</h6>
      <div class="mt-3 ml-3"> ${eee}</div>
    </div>
    <a href="#"><i class="fas fa-trash-alt text-danger qoshimchaYre" style="position: absolute; top: 10px; right: 10px;"></i></a>
    </div>
    </div>
    `; 
    docum.insertAdjacentHTML("beforeend", addTask);

})

  
})

tolovbos.addEventListener("click",function (e) {
  e.preventDefault();
  document.querySelectorAll('.tolovremove').forEach(function (taskItem) {
    taskItem.remove();
})
  let inputradio = document.getElementsByName("inlineRadio");
  let Radiolar;
  inputradio.forEach(el => {
    if (el.checked) {
      Radiolar = el;
    }
  });
  let tolo =  Radiolar.nextElementSibling.textContent;
let addTask = `
<div class="col-lg-3 col-md-4 col-sm-6 tolovremove">
<div class="card d-flex position-relative">
  <div class="davrillik position-relative">
   <h6 class=" position-absolute ml-3"> Davriylik</h6>
    <div class="mt-3 ml-3"> ${tolo}</div>
  </div>
<a href="#"><i class="fas fa-trash-alt text-danger" style="position: absolute; top: 10px; right: 10px;"></i></a>
 </div>
 </div>`; 
 tolovlarquti.insertAdjacentHTML("beforeend", addTask);

})

clearr.addEventListener("click", function () {
  document.getElementById("inlineRadio1").checked = false;
  document.getElementById("inlineRadio2").checked = false;
  document.getElementById("inlineRadio3").checked = false;
  document.getElementById("inlineRadio4").checked = false;
  document.querySelector(".clearr").checked = false;
})

removetask.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.remove();
  }
});
removetask2.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.remove();
  }
});

removetask3.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.remove();
  }
});
qoshimchaYre.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement .parentElement.remove();
  }
});
yuklashturiRemove.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement .parentElement.remove();
  }
});
tushurishturiRemove.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement .parentElement.remove();
  }
});
documRemove.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
removehajm.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
removetolov.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
kantakremove.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
jonatish.addEventListener("submit", function (e) {
  e.preventDefault();
})

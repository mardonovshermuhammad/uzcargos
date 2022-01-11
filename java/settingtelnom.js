const formcontrol = document.querySelector(".formcontrol"),
  smschiqorish = document.querySelector(".smschiqorish"),
  vaqtketishi = document.querySelector(".vaqtketishi"),
  timerinputm = document.querySelector(".timerinputm"),
  timerinputs = document.querySelector(".timerinputs"),
  telraqam = document.querySelector(".telraqam"),
  smskoddijonatish = document.querySelector(".smskoddijonatish");

formcontrol.addEventListener("input", function (e) {
  const name = e.target.value;
  const regexphone = /^\+?998\s?\d{2}\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

  if (regexphone.test(name)) {
    formcontrol.classList.remove("is-invalid");
    formcontrol.classList.add("is-valid");
    let qqq = document.querySelector(".dizab");
    qqq.classList.toggle("disabled");
    if (!qqq.disabled) {
      smschiqorish.addEventListener("click", function (e) {
        let www = document.querySelector(".smskiritsh");
        www.classList.toggle("d-none");
        let xxx = document.querySelector(".telkiritish");
        xxx.classList.toggle("d-none");
        telraqam.textContent = `${name} telefon raqamingizga xavfsizlik kodi yuborildi`;

        let minute = parseInt(timerinputm.value);
        let secund = parseInt(timerinputs.value);

        let time = minute * 60 + secund;

        const setInter = setInterval(function () {
          time--;

          if (time === 0) {
            let www = document.querySelector(".smskiritsh");
            www.classList.toggle("d-none");
            let xxx = document.querySelector(".telkiritish");
            xxx.classList.toggle("d-none");

            clearInterval(setInter);
          }
          let resulMinut = parseInt(time / 60);
          let resulSecund = parseInt(time - resulMinut * 60);

          resulMinut = resulMinut < 10 ? "0" + resulMinut : resulMinut;
          resulSecund = resulSecund < 10 ? "0" + resulSecund : resulSecund;

          vaqtketishi.textContent = `${resulMinut}:${resulSecund}`;
        }, 1000);

        smskoddijonatish.addEventListener("submit", function (e) {
          e.preventDefault();
        });
      });
    }
  } else {
    formcontrol.classList.add("is-invalid");
    formcontrol.classList.remove("is-valid");
    let qqq = document.querySelector(".dizab");
    qqq.classList.add("disabled");
  }
});

function toogleTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function toogleTabs1(evt, tabName1) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(tabName1).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function myAlert() {
    alert("Please login first ._.");
  }
  function toogleLogin() {
    var login = document.getElementById("form-area-login");
    var regis = document.getElementById("form-area-regis");
    login.classList.toggle("active-form");
    regis.classList.remove("active-form")
  }
  function toogleRegis(){
    var login = document.getElementById("form-area-login");
    var regis = document.getElementById("form-area-regis");
    regis.classList.toggle("active-form");
    login.classList.remove("active-form")
  }
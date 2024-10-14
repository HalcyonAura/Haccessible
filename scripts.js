function onBurgerOpen(){
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
    });
}

function onDropdown(){
    var acc = document.getElementsByClassName("accordion");
  var expanders = document.getElementsByClassName("expander");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
      var panel = this.nextElementSibling;
      if(panel.style.display === "block"){
        panel.style.display = "none";
        this.setAttribute('aria-expanded', 'false')
        this.firstElementChild.classList.remove('up')
        this.firstElementChild.classList.add('down')
      } else {
        panel.style.display = "block";
        this.setAttribute('aria-expanded', 'true')
        this.firstElementChild.classList.add('up')
      }
    });
  }
}
var preloader = document.querySelector('.c-pre-loader')
window.addEventListener("load", vanish);

function vanish(){
  preloader.classList.add("disapear")
}

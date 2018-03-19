let dpdwnState = 0;
let dpdwn = document.getElementsByClassName('nav-dropdown');
let menuState = 0;
let btn = document.getElementsByClassName('nav-btn');
let btn_r = document.getElementsByClassName('nav-btn-r');

function dropdown(){
  if(dpdwnState === 0){
    dpdwn[0].style.display = 'block';
    dpdwnState = 1;
  } else {
    dpdwn[0].style.display = 'none';
    dpdwnState = 0;
  }
}

function showMenu() {
  if(menuState === 0){
    for(i=0; i<= btn.length; i++){
      btn[i].style.display = 'block';
      menuState = 1;
    }
  } else {
    for(i=0; i<= btn.length; i++){
      btn[i].style.display = 'none';
      menuState = 0;
    }
  }
}
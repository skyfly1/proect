  header = document.getElementsByClassName("header")[0];
  reatured = document.getElementsByClassName("reatured")[0];
  team = document.getElementsByClassName("team")[0];
  dno = document.getElementsByClassName("dno")[0];
  photo = document.getElementsByClassName("photo")[0];


//функция плавного скроллинга к элементу
function scrollToElement(theElement){
  $('html, body').animate({scrollTop: $(theElement).offset().top}, 1200);
} 
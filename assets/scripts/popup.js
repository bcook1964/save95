function togglepopup(){
  document.getElementById("popup-video").classList.toggle("active");
}

/* Mobile Popup Video */
if($(window).width()>=1398){
  $('.1500px').show();
  $('.1398px').hide();
}
/* Functional If Window Resized */
$(window).resize(function(){
  if($(window).width()>=1398){
    $('.1500px').show();
    $('.1398px').hide();
  }
});

if($(window).width()<=1398){
  $('.1500px').hide();
  $('.1398px').show();
}
/* Functional If Window Resized */
$(window).resize(function(){
    if($(window).width()<=1398){
    $('.1500px').hide();
    $('.1398px').show();
  } 
});
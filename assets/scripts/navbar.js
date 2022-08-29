// scroll 100px 

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");
    const images = document.querySelector('.normal');

  if (document.documentElement.scrollTop > 100) {
    images.classList.add('active')
    navBar.classList.add("bg-light");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('dark-text');
    }

  } else {
    images.classList.remove('active')
    navBar.classList.remove("bg-light");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('dark-text');
    }
  }
}

/* Hide mobile nav on Desktop */
if($(window).width()>768){
  $('.mobileview').hide();
  $('.desktopview').show();
  $('.smallview').hide();
}
/* Functional If Window Resized */
$(window).resize(function(){
  if($(window).width()>768){
    $('.mobileview').hide();
    $('.desktopview').show();
    $('.smallview').hide();
  }
});

/* Hide Desktop nav on Mobile */
if($(window).width()<768){
  $('.mobileview').show();
  $('.desktopview').hide();
  $('.smallview').show();
}
/* Functional If Window Resized */
$(window).resize(function(){
if($(window).width()<768){
  $('.mobileview').show();
  $('.desktopview').hide();
  $('.smallview').show();
  } 
});

if($(window).width()>=1398){
  $('.mobileview').hide();
  $('.desktopview').show();
}
/* Functional If Window Resized */
$(window).resize(function(){
  if($(window).width()>=1398){
    $('.mobileview').hide();
    $('.desktopview').show();
  }
});

/* Hide Desktop nav on Mobile */
if($(window).width()<=1398){
  $('.mobileview').show();
  $('.desktopview').hide();
}
/* Functional If Window Resized */
$(window).resize(function(){
    if($(window).width()<=1398){
    $('.mobileview').show();
    $('.desktopview').hide();
  } 
});

const header = document.querySelector('.navbar_two');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >=100){
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }
}

function togglepopup(){
    document.getElementById("popup_video").classList.toggle("active");
}
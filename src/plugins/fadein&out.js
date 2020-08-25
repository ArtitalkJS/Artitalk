function fadeOut(el){
el.style.opacity = 1;
el.style.display =  "none";

(function fade() {
    if ((el.style.opacity -= .1) < 0) {
    el.style.display = "none";
    } else {
    requestAnimationFrame(fade);
    }
})();
}

// fade in

function fadeIn(el, display){
el.style.opacity = 0;
el.style.display = display || "";

(function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
    el.style.opacity = val;
    requestAnimationFrame(fade);
    } 
})();
}

function el_fadein(id){
    if(id=="lazy"&&artitalkVar.lazy==0) return;
    var el = document.getElementById(id);
    fadeIn(el);
}
function el_fadeout(id){
    if(id=="lazy"&&artitalkVar.lazy==0) return;
    var el = document.getElementById(id);
    fadeOut(el);
}
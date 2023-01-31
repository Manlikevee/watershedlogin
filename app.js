
gsap.to(".tween" , {stagger: 1, x:50, fill:"yellow",  duration:1, repeat:-1, yoyo: true, ease:"bounce"});


gsap.fromTo(".fredo", {stagger: 1, x:750,  y:200, opacity:0, yoyo: true}, {x:20 , y:100, rotation:360, opacity:1,  duration:2, yoyo: true});


gsap.to("#freds img", {y:100, repeat:-1, duration:1.5,  yoyo: true, stagger:{
  amount:1.2, from:"edges"
}})


var tween =  gsap.to(".green" , {stagger: 1, x:950,  duration:3, paused: true});



document.getElementById("play").onclick = function () {
  tween.play();
}
document.getElementById("pause").onclick = ()=> tween.pause();
document.getElementById("reverse").onclick = ()=> tween.reverse();
document.getElementById("restart").onclick = ()=> tween.restart();

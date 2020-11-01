gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({duration:1});


tl.from(".anim1",{y:-100,opacity:0,stagger:.6,ease:Power2.easeOut})
tl.from(".svg",{x:200,opacity:0,ease:Power2.easeOut},"-=.5")
tl.from(".elipse",{x:-200,opacity:0,ease:Power2.easeOut});


const mywishesTl = gsap.timeline({scrollTrigger:".wishes-whatson",duration:.3});

mywishesTl.from(".mywishes",{y:-100,opacity:0,ease:Power2.easeOut})
mywishesTl.from(".what-happen",{y:-100,opacity:0,ease:Power2.easeOut});






const startit = () => {
  setTimeout(function () {
    console.log("start");
    confetti.start();
  }, 1000);
};

const stopit = () => {
  setTimeout(function () {
    console.log("stop");
    confetti.stop();
  }, 6000);
};

startit();
stopit();

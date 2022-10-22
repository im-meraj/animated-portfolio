document.querySelectorAll(".reveal").forEach((el) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.textContent = el.textContent;
    spanParent.appendChild(spanChild);

    el.innerHTML = "";
    el.appendChild(spanParent);
});








// GSAP Animations

const tl1 = gsap.timeline();

tl1.to("#sheikh", {
    duration: 1,
    x: 0,
    ease: Expo.easeInOut,
})
.to("#is", {
    duration: 1,
    x: 0,
    ease: Expo.easeInOut,
    delay: -1
})
.to("#a", {
    duration: 1,
    x: 0,
    ease: Expo.easeInOut,
    delay: -1
})
.to("#intro-name", {
    duration: 1,
    y: -100,
    ease: Expo.easeInOut,
})
.to(".goUp", {
    duration: 1,
    y: -100,
    delay: -1,
    ease: Expo.easeInOut,
})



const tl2 = gsap.timeline();

tl2.to("#main", { 
    height: 0,
    duration: 2,
    delay: 1.1,
    ease: Expo.easeInOut
})
.to("#main__overlay-green", {
    height: "100vh",
    duration: 2,
    delay: -1,
    ease: Expo.easeOut
})
.to("#main__overlay-white", {
    height: "100vh",
    duration: 1.2,
    delay: -1.6,
    ease: Expo.easeOut
})
.to(".child", {
    y: "0%",
    duration: 2,
    ease: Expo.easeOut
})

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

const tl = gsap.timeline();

tl.to("#main", { 
    height: 0,
    duration: 2,
    delay: 1.1,
    ease: Expo.easeInOut
})
.to("#main__overlay-green", {
    height: "100vh",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})
.to("#main__overlay-white", {
    height: "100vh",
    duration: 2,
    delay: -1.6,
    ease: Expo.easeInOut
})
.to(".child", {
    y: "0%",
    duration: 2,
    ease: Expo.easeOut
})
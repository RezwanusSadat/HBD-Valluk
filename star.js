function star(){
    var b = Math.floor(Math.random()*11 + 1);
    var a = "<img src=\"images/star" + b + ".png\">";
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = a;
    star.style.left = Math.random()*100+"vw";
    star.style.animationDuration = Math.random()*2 + 3;
    document.body.appendChild(star);
    setTimeout(()=>{
        star.remove();
    },3000)
}
setInterval(star, 200);
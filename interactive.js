let click=0;
let mom = document.querySelector(".mom");
let dad = document.querySelector("img.dad");
let b1=document.querySelector(".baloon1");
let b2=document.querySelector(".baloon2");
let b3=document.querySelector(".baloon3");
let baloons=document.querySelector(".ba");
let l1 = document.querySelector(".label1");
let l2 = document.querySelector(".label2");
let l3 = document.querySelector(".label3");
let he1=document.querySelector("#he1");
let audio = document.querySelector(".song");
let cake1=document.querySelector("#c1");
let cake2=document.querySelector("#c2");
let cake3=document.querySelector("#c3");
let cakes=document.querySelectorAll(".cake");
let audi = document.querySelector(".bomb");
let aud = document.querySelector(".spring");



setTimeout(showLabel, 3000);

function showLabel(){
    console.log("It works");
    l1.setAttribute("class", "label4");
}

b1.addEventListener("click", b1Clicked);
function b1Clicked(){
    console.log("First clicked");

    audio.play();
    setTimeout(showLabel2, 3000);
}

function showLabel2(){

    console.log("It works");
    l2.setAttribute("class", "label4");

}
b2.addEventListener("click", b2Clicked);
function b2Clicked(){
    console.log("Second clicked");
    cake1.classList.add("cake2");
    cake2.classList.add("cake2");
    cake3.classList.add("cake2");
    cake1.classList.add("shake");
    cake2.classList.add("shake");
    cake3.classList.add("shake");

}
cakes.forEach(addClass);

function addClass(eachCake, index) {
    eachCake.addEventListener("click", listClicked);
    eachCake.addEventListener("click", count);

}

function listClicked(evt) {
    console.log(evt.target);
    evt.target.classList.toggle("picked");

}
function count() {
    click++;
    console.log(click)
    if (click == 3) {
        audio.pause();
        setTimeout(showLabel3, 600)
    }
}

function showLabel3(){
    console.log("It works");
    l3.setAttribute("class", "label4");
}

b3.addEventListener("click", b3Clicked);
function b3Clicked(){
    console.log("Third clicked");
    b1.classList.add("explode");
    b2.classList.add("explode");
    b3.classList.add("explode");
    cake1.classList.add("explode");
    cake2.classList.add("explode");
    cake3.classList.add("explode");
    audi.play();
    setTimeout(together, 1000)
}
function together(){
    console.log("going home");
    dad.classList.add("dadMove");
    mom.classList.add("momMove");
    aud.play();

}




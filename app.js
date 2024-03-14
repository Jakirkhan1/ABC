let counter = 0;
let increase_btn = document.querySelector(".btn_increase");
increase_btn.addEventListener("click", function() {
    counter++;
    document.querySelector("#value").textContent = counter;
    if(counter>0) {
        document.querySelector("#value").style.color ="green";
    }
    if(counter == 0) {
        document.querySelector("#value").style.color =" var(--clr-grey-1)";
    }

})
document.querySelector(".btn_decrease").addEventListener("click",function() {
    counter--;
    document.querySelector("#value").textContent = counter;
    if(counter<0) {
        document.querySelector("#value").style.color ="red";
    }
    if(counter == 0) {
        document.querySelector("#value").style.color =" var(--clr-grey-1)";
    }

})

document.querySelector(".btn_reset").addEventListener("click",function() {
    counter = 0;
    document.querySelector("#value").textContent = counter;
    if(counter == 0) {
        document.querySelector("#value").style.color =" var(--clr-grey-1)";
    }
    if(counter == 0) {
        document.querySelector("#value").style.color =" var(--clr-grey-1)";
    }
})
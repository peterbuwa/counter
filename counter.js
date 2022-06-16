let value = document.querySelector(".value");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let count = 0;

increase.addEventListener("click", function(){
    if(increase.classList.contains("increase")){
        value.textContent = count++;
        increase.style.color = "red"

    }
})
decrease.addEventListener("click", function(){
    if(decrease.classList.contains("decrease")){
        value.textContent = count-- - 1;
        decrease.style.color = "green"

    }
})
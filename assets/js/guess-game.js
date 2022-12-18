let randomNumber = 0;
let count = 0;
const btnGuess = document.querySelector("#btn-guess");
const btnStart = document.querySelector("#btn-start");
const numEl = document.querySelector("#txtNumber");
const labelEl = document.querySelector("#lblResult");
const shotParent = document.querySelector("#shot");



btnStart.addEventListener("click",()=> {
    if(btnStart.innerHTML=="Reset Game"){
        numEl.value="";
        resetShots();
    }
    randomNumber = generateRandomNumber(1,100);
    btnGuess.classList.replace("d-none","d-inline");
    btnStart.innerHTML = "Reset Game";
    labelEl.innerHTML = "";
    labelEl.classList.add("d-none")
    shotParent.classList.add("d-block")
    numEl.removeAttribute("disabled");
    numEl.focus();
})

const reset = () => {
    btnGuess.classList.replace("d-inline","d-none");
    btnStart.innerHTML = "Start Game";
    numEl.setAttribute("disabled","true");
    resetShots();
    

}

btnGuess.addEventListener("click",() =>{
    let num = Number(numEl.value);
    
    if(!num){
        console.log(num)
        labelEl.innerHTML = "Please input a number!";
    }else if(num === randomNumber){
        labelEl.innerHTML = "Congrats! You guessed the number";
        shotParent.classList.remove("d-block")
        reset();
    }
    else if(num > randomNumber){
        labelEl.innerHTML = "DOWN!";
        shotParent.children[count].className= "fa-regular fa-heart";
        count++;
    }
    else{
        labelEl.innerHTML = "UP!";
        shotParent.children[count].className= "fa-regular fa-heart";
        count++;
    }
    labelEl.classList.remove("d-none")
    numEl.value="";
    numEl.focus();
    if(count===5){
        labelEl.innerHTML = "GAME OVER!";
        shotParent.classList.remove("d-block")
        reset();
    }
})

const resetShots = () =>{
    count=0;
    for (let index = 0; index < shotParent.children.length; index++) {
        shotParent.children[index].className= "fa-sharp fa-solid fa-heart";
    }
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

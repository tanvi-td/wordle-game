let randomnumber = Math.floor(Math.random()*100)+1
let guesscount = 1

const guesses = document.getElementById('guesses')
const lastresult = document.getElementById('lastresult')
const loworhigh = document.getElementById('loworhigh')
const submitguess = document.getElementById('submitguess')
const guessfeild = document.getElementById('guessfeild')
const resetbutton = document.getElementById('resetbutton')

resetbutton.style.display = "none"
guessfeild.focus()
function resetgame(){
    guessfeild.disabled=true
    submitguess.disabled=true
    resetbutton.style.display = "inline"
   resetbutton .addEventListener("click", () =>{
    guesscount = 1
    let resetparas = document.querySelectorAll(".result p")

    for(let i = 0;i < resetparas.length;i ++) {
        resetparas[i].textContent = ""
    }
    resetbutton.style.display = "none"
    guessfeild.disabled=false
    submitguess.disabled=false
    guessfeild.disabled = ""
    guessfeild.focus()
    randomnumber = Math.floor(Math.random()*100)+1
   })
}
submitguess.addEventListener("click", () =>{
    let userguess = Number(guessfeild.value)
    
    if (guesscount === 1){
        guesses.textContent = "previous guesses:  "
        guesses.textContent += userguess
    } else {
        guesses.textContent += ", " + userguess
    }

    if (userguess === randomnumber) {
        lastresult.textContent = "Congrats! You guessed correctly."
        loworhigh.textContent = ""
        resetgame()
    }else if (guesscount === 10) {
        lastresult.textContent = "Game Over :("
        loworhigh.textContent = ""
        resetgame()
    } else {
        lastresult.textContent = "Try Again"
        if (userguess< randomnumber) {
            loworhigh.textContent = "Too Low"
        } else{
            loworhigh.textContent = "Too High"
        }
    }

    guesscount++
})
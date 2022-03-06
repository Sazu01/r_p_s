"use strict";

const btn_wrapper = document.querySelector(".user_input_game")
const Computer_score = document.querySelector(".computer_score_box .number")
const user_score = document.querySelector(".user_score_box .number")
const computer_result = document.getElementById("id_003")
const [input_rock, input_paper, input_scissors] = document.getElementsByClassName("btn")
const user_name_html = document.getElementById("user_name_html")
const login_wrapper = document.querySelector(".name-wrapper")
const login_form = document.querySelector("div.name form")
const login_field = document.querySelector("div.name form input[type=\"text\"]")

function random_number() {
    return Math.floor((Math.random() * 4))
}

function num_complier(n) {
    if (n === 1) {
        return "Rock"
    } else if (n === 2) {
        return "Paper"
    } else if (n === 3) {
        return "Scissors"
    }
}

login_form.addEventListener("submit", (e) => {
    e.preventDefault()
    let user_name = login_field.value
    login_wrapper.classList.add("hide")
    user_name_html.textContent = `${user_name}`
})

let Computer_did = 0
let user_did = 0

btn_wrapper.addEventListener("click", (e) => {
    const computer_chose = random_number()
    computer_result.parentElement.classList.remove("hide")
    if (e.target === input_rock) {
        if (computer_chose === 3) {
            // user won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)} (Draw)`
            console.log(num_complier(computer_chose));
        } else if (computer_chose === 2) {
            // computer won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)}`
            Computer_did++
            Computer_score.textContent = `${Computer_did}`
            console.log(num_complier(computer_chose));
            
        } else if (computer_chose === 3) {
            // user won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)}`
            user_did++
            user_score.textContent = `${user_did}`
            console.log(num_complier(computer_chose));
        }
    } else if (e.target === input_paper) {
        if (computer_chose === 1) {
            // user won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)}`
            user_did++
            user_score.textContent = `${user_did}`
            console.log(num_complier(computer_chose));
         }else if (computer_chose === 2) {
            // user won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)} (Draw)`
            console.log(num_complier(computer_chose));
        } else if (computer_chose === 3) {
            // computer won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)}`
            Computer_did++
            Computer_score.textContent = `${Computer_did}`
            console.log(num_complier(computer_chose));
        }
    } else if (e.target === input_scissors) {
        if (computer_chose === 1) {
            // computer won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)}`
            Computer_did++
            Computer_score.textContent = `${Computer_did}`
            console.log(num_complier(computer_chose));
        } else if (computer_chose === 2) {
            // user won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)}`
            user_did++
            user_score.textContent = `${user_did}`
            console.log(num_complier(computer_chose));
        } else if (computer_chose === 3) {
            // user won
            computer_result.textContent = `Computer choosed: ${num_complier(computer_chose)} (Draw)`
            console.log(num_complier(computer_chose));
        }
    }

})
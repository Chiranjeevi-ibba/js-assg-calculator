let inputEle = document.getElementById("value")
let buttonsContEle = document.getElementById("buttons")
let inputErrorEle = document.getElementById("input-error")
let unOrderListEle = document.getElementById("history")

let output = ""
let liData = ""

function onClickBtns(id) {
    inputErrorEle.textContent = ""
    let clickedEle = document.getElementById(id).textContent
    if (clickedEle == "^") {
        inputEle.value += clickedEle
        output += "**"
    }else if (clickedEle == "x") {
        inputEle.value += clickedEle
        output += "*"
    } else {
        inputEle.value += clickedEle
        output += clickedEle
    }
} 

function onClickClear() {
    output = ""
    inputEle.value = ""
    console.log(inputEle.value);
}

function onClickEqual() {
    try{
        liData = output
        inputEle.value = eval(output)
        output = (eval(output)).toString()
        liData += " = " + output
        let liEle = document.createElement("li")
        liEle.classList.add("each-li")
        console.log(liData);
        liEle.textContent = liData
        unOrderListEle.appendChild(liEle)

    }catch(e) {
        inputEle.value = ""
        output = ""
        inputErrorEle.textContent = "Please enter valid expression"
    }
}

function onClickDelete() {
    console.log( output);
    if (output.length >= 1) {
        output =  output.substring(0, output.length-1)
        inputEle.value = output
        console.log( output)
    }
}

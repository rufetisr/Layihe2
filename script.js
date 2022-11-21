
let form = document.querySelector(".form");
let btn = document.querySelector(".submit-btn");

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.input.value.length == 0) {
        alert("Enter plan");
    }
    else {
        document.querySelector(".tasks").innerHTML +=
            ` <div class="task">
        <span id="taskname">
        ${document.querySelector('form input').value}
        </span>
        <button class="delete">
        X
        </button>
        </div>`;

        form.input.value = "";

        let delBtns = document.querySelectorAll(".delete");

        delBtns.forEach(element => {
            element.type = "button";
            element.addEventListener("click", (event) => {
                audio.play();
                event.target.parentNode.remove();
            })
        });
    }
});


let btnDec = document.querySelector("#decrease");
let btnInc = document.querySelector("#increase");

btnDec.addEventListener("click", () => {
    let arr = [];
    let taskList = document.querySelectorAll("#taskname");
    taskList.forEach(element => {
        arr.push(element.innerText);

    });
    arr.sort((a, b) => {
        return b.charCodeAt() - a.charCodeAt();
    });

    for (let i = 0; i < arr.length; i++) {
        taskList[i].innerHTML = arr[i];
    }
})

btnInc.addEventListener("click", () => {
    let arr = [];
    let taskList = document.querySelectorAll("#taskname");
    taskList.forEach(element => {
        arr.push(element.innerHTML);
    });
    arr.sort((a, b) => {
        return a.charCodeAt() - b.charCodeAt();
    });
    for (let i = 0; i < arr.length; i++) {
        taskList[i].innerHTML = arr[i];
    }
})


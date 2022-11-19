// let form = document.querySelector(".form");
// let btn = document.querySelector("button");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let tr = document.createElement("tr");
//     let td = document.createElement("td");
//     let deleteBtn = document.createElement("button");

//     deleteBtn.innerText = "X"
//     deleteBtn.classList.add("delete");
//     let tbody = document.querySelector("tbody");
//     tbody.append(tr);
//     tr.append(td, deleteBtn);
//     td.innerText = event.target.username.value;

// })
// let delBtn = document.querySelectorAll(".delete");


// delBtn.addEventListener("click", (event) => {
//     let tbody = document.querySelector("tbody");
//     let tr = document.createElement("tr");
//     tbody.removeChild(event.target.tr);
// })

let form = document.querySelector(".form");
let btn = document.querySelector(".submit-btn");
let j =0;
let arr = [];
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
    
    // document.querySelector(".tasks").classList.add("tasks");
    form.input.value = "";
    let delBtns = document.querySelectorAll(".delete");
    delBtns.forEach(element => {
        element.type = "button";
        element.addEventListener("click", (event) => {
            event.target.parentNode.remove();

        })
    });

    let btnDec = document.querySelector("#decrease");
    
    let btnInc = document.querySelector("#increase");
    let taskList = document.querySelectorAll(".task");
    // console.log(taskList[i].children[0].innerText);
    console.log(j);
    
    arr.push(taskList[j].children[0].innerText);
      
    console.log(arr);
    btnDec.addEventListener("click",()=>{
        // ev.preventDefault();
        arr.sort((a, b)=>{
            return b.charCodeAt()-a.charCodeAt();
        });
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            taskList[i].children[0].innerHTML = arr[i];
        }
    })    
    btnInc.addEventListener("click",()=>{
        arr.sort((a, b)=>{
            return a.charCodeAt()-b.charCodeAt();
        });
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            taskList[i].children[0].innerHTML = arr[i];
        }
    })    

    j++; 
//     btnDec.addEventListener("click",()=>{
     
// })
 }
});

console.log("outside");


// btnDec.addEventListener("click", ()=>{
   
// })


// console.log(taskList);
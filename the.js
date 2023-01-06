// let users = [ // Nested object literal
//     {
//         nomi : 'acer',
//         ozu : '4 GB',
//         Joyi : '500 GB'
//     },
//     {
//         nomi : 'leno core i3',
//         ozu : '4 GB',
//         Joyi : '500 GB'
//     }
// ];
// console.log('Mening Kampyuterimning nomi ' + users[0].nomi + ' run '+ users[0].ozu + ' joyi '+ users[0].Joyi);
// console.log('Mening Kampyuterimning nomi ' + users[1].nomi + ' run '+ users[1].ozu + ' joyi '+ users[1].Joyi);
// frames(users)
//_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________ 
// // 19.12.2022
// function yosh(MY_AGE){
//     return 60 - MY_AGE;
// };
// console. log( 'Men ' + yosh(13) + ' yildan so`ng pensiyaga chiqaman');
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// 21.12.2022
//  let i = 1;
//  while (import {  } from "module"; <= 10){
//     console.log(i)
//     i += 2;
//  }
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// for(let n = 1;n <= 30; n++){
//     let a = '';
//     if (n % 3 == 0){
//         a += 'Fizz'
//     }
//     if (n % 5 == 0){
//         a += 'Buzz';
//     }
//     console.log(a || n)
// };


let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
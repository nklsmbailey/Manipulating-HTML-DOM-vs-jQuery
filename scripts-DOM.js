addEventListener("DOMContentLoaded", button);
function button() {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Click Me!");
  button.appendChild(buttonText);
  document.body.appendChild(button);
  button.addEventListener("click", click);
  function click() {
    alert("Lord,have mercy!");
  }
}

let button2 = document.getElementById("button");
button2.addEventListener("click", click);
function click() {
    let message = document.getElementById("text-box").value;
    alert(message);
}

let div = document.getElementById("div");
div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseleave", function() {
    div.style.backgroundColor = "black";
})

let p = document.getElementById("p");
p.addEventListener("click", function() {
    let allchar = "0123456789ABCDEF";
    let randcol = "";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
})


const myFriends = ["Basil", "Rachel", "Sam", "Kathy", "Judy", "Sparrow", "Ed", "Boyd", "Peter", "Jimmy"];

let ulCount = 0; // Initializing ulCount
const friendUl = document.querySelector('#friendUl');




    // friendUl.style.visibility = 'hidden'; // visibility: hidden;


const button4 = document.querySelector('#button4');

// 'click' event listener on button4
button4.addEventListener('click', () => {
    
        for(let i = 0; i < myFriends.length; i++) {
            const listItem = createElement('li');
            friendUl.appendChild(listItem);
        // friendUl.style.visibility = 'visible';
    //     ulCount += 1; // Adds 1 with each 'click'
    // if(ulCount === 1) { // visibility: hidden;
    // } else if(ulCount > 1) {
    //     friendUl.style.visibility = 'hidden'; // visibility: hidden;
    //     ulCount = 0;
    }
})

// let button3 = document.getElementById("button3");
// let div2 = document.getElementById("div2");
// button3.addEventListener("click", function() {
//     let span = document.createElement("span");
//     div2.appendChild(span);
//     let text = document.createTextNode("Nicholas");
//     span.appendChild(text);
// })
// let friends = ["Basil", "Rachel", "Sam", "Kathy", "Judy", "Sparrow", "Ed", "Boyd", "Peter", "Jimmy"];
// let button4 = document.getElementById("button4");
// let ul = document.getElementById("ul");
// button4.addEventListener("click", function () {
//     for (let i = 0; i < friends.length; i++) {
//         let li = document.createElement("li");
//         let name = document.createTextNode(friends[i]);
//         li.appendChild(name);
//         ul.appendChild(li);
// }

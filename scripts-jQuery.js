let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Lord, have mercy!")
});

let $button2 = $("#button");
$button2.click( function () {
    let message = $("#text-box").val();
    alert(message);
});

let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
});

let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";
    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }
    $($p).css("color", "#" + $randcol);
});

const myFriends = ["Basil", "Rachel", "Sam", "Kathy", "Judy", "Sparrow", "Ed", "Boyd", "Peter", "Jimmy"];

let ulCount = 0; // Initializing ulCount





//.on('click') event handler method on #ulBtn
$('#button3').on('click', () => {  
      $('#friendUl').append(`<li class="list-group-item">${myFriends[ulCount]}</li>`); // Creates <li>, appends to #friendsUl
    ulCount += 1; // Adds 1 with each .on('click') 
    // if(ulCount === 1) {
    //     $('#friendUl').show();
    // } else if(ulCount > 1) {
    //     $('#friendUl').hide();
    //     ulCount = 0;
    // }
})

// let $button3 = $("#button3");
// let $div2 = $("#div2");
// $button3.click( function() {
//     let $span = $("<span>Nicholas</span>");
//     $($span).appendTo($div2);
// });

// let $friends = ["Basil", "Rachel", "Sam", "Kathy", "Judy", "Sparrow", "Ed", "Boyd", "Peter", "Jimmy"];
// let $button5 = $("#button5");
// let $ul = $("#ul");
// $($button5).click( function () {
//     for (let i = 0; i < $friends.length; i++) {
//         let $li = $("<li>" + ($friends[i]) + "</li>");
//         $($li).appendTo($ul);
//     }
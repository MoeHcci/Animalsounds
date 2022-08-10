// The Sounds Functions
// We can not have functions and for loop in the bottom


// function animal1() { new Audio('lion.mp3').play() };
// function animal2() { new Audio('alligator.mp3').play() } ;
// function animal3() { new Audio('camel.mp3').play() } ;
// function animal4() { new Audio('cat.mp3').play() } ;
// function animal5() {new Audio('cow.mp3').play() };
// function animal6() {new Audio('dog.mp3').play() } ;
// function animal7() {new Audio('dolphin.mp3').play() } ;
// function animal8() {new Audio('eagle.mp3').play() } ;
// function animal9() {new Audio('elephant.mp3').play() } ;
// function animal10() {new Audio('goat.mp3').play() };
// function animal11() {new Audio('gorilla.mp3').play() };
// function animal12() { new Audio('horse.mp3').play() } ;
// function animal13() { new Audio('monkey.mp3').play() } ;
// function animal14() { new Audio('rooster.mp3').play() } ;
// function animal15() { new Audio('wildbeast.mp3').play() } ;


function animal1() { new Audio('lion.mp3') };
function animal2() { new Audio('alligator.mp3') } ;
function animal3() { new Audio('camel.mp3')} ;
function animal4() { new Audio('cat.mp3')} ;
function animal5() {new Audio('cow.mp3') };
function animal6() {new Audio('dog.mp3')} ;
function animal7() {new Audio('dolphin.mp3') } ;
function animal8() {new Audio('eagle.mp3') } ;
function animal9() {new Audio('elephant.mp3')} ;
function animal10() {new Audio('goat.mp3')};
function animal11() {new Audio('gorilla.mp3')};
function animal12() { new Audio('horse.mp3') } ;
function animal13() { new Audio('monkey.mp3')} ;
function animal14() { new Audio('rooster.mp3') } ;
function animal15() { new Audio('wildbeast.mp3') } ;


// A For loop breakdown:
// -The first part is the items
// -The second part is the duration of the loop
// -The third part is the condition of how much chnages each time
// -The fourth part is code executed

// The EventListener:
// The below addEventListener has an anonymous function

// The For loop & EventListener:
// - The x will change based on the clicked "notes_set", because the addEventListener is wating for a specific click.
// - The for loop will execute based on the condition. adding the event listenter allows us to work with for loops without the need
// for an if statements. Here we clearly running the for loop but for it to present its executions results
// the x must change and for the x to change the user requires to make a click
// In embedded SW I have written I usually run the loop and see the results right away of the elements in the array right always
// However, the addEventListener forces the results of the for loop to execute based on a condition (e.g., a mouse click)

// In an addEventListener method the this keyword refers to the button that triggered the event
for (var x = 0;
  (x < document.getElementsByClassName("notes_set").length); x = x + 1) {

  document.getElementsByClassName("notes_set")[x].addEventListener("click", function() {

    console.log(this);

  }

);
}

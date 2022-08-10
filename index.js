// Playing Sounds Via Clicking on the button
//   Method 1. Creating Sound Functions
//     Sound Functions are Audio functions that play the mp3 files and are related
//     to the button's in the index.html page

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


// Playing Sounds Via Clicking on a button
//   Method 1. Utilizing a For loop, Event Listenter, If or the Switch statements
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
  // In an addEventListener method the this keyword refers to the button that triggered the event
for (var x = 0;
  (x < document.getElementsByClassName("notes_set").length); x = x + 1) {

  document.getElementsByClassName("notes_set")[x].addEventListener("click", function() {

    // The varilable condition that changes based on triggering the anonymous function
    console.log(this.innerHTML);
    var buttonSpecificCondition = this.innerHTML;


      // Playing Sound Using the If statements
      // Use different var each time to keep things orginized
      // if (this.innerHTML == "lions") {
      //   // var was used instead of a function, because functions did not work
      //   var animal1 = new Audio('lion.mp3').play();
      //
      // } else if (this.innerHTML == "alligator") {
      //   var animal2 = new Audio('alligator.mp3').play();
      //
      // } else if (this.innerHTML == "camel") {
      //   var animal3 = new Audio('camel.mp3').play();
      //
      // } else if (this.innerHTML == "cat") {
      //   var animal4 = new Audio('cat.mp3').play();
      //
      // } else if (this.innerHTML == "cow") {
      //   var animal5 = new Audio('cow.mp3').play();
      //
      // } else if (this.innerHTML == "dog") {
      //   var animal6 = new Audio('dog.mp3').play();
      //
      // } else if (this.innerHTML == "dolphine") {
      //   var animal7 = new Audio('dolphin.mp3').play();
      //
      // } else if (this.innerHTML == "eagle") {
      //   var animal8 = new Audio('eagle.mp3').play();
      //
      // } else if (this.innerHTML == "elephants") {
      //   var animal9 = new Audio('elephant.mp3').play();
      //
      // } else if (this.innerHTML == "goat") {
      //   var animal10 = new Audio('goat.mp3').play();
      //
      // } else if (this.innerHTML == "gorilla") {
      //   var animal11 = new Audio('gorilla.mp3').play();
      //
      // } else if (this.innerHTML == "horse") {
      //   var animal12 = new Audio('horse.mp3').play();
      //
      // } else if (this.innerHTML == "monkeys") {
      //   var animal13 = new Audio('monkey.mp3').play();
      //
      // } else if (this.innerHTML == "rooster") {
      //   var animal14 = new Audio('rooster.mp3').play();
      //
      // } else if (this.innerHTML == "wildbeast") {
      //   var animal15 = new Audio('wildbeast.mp3').play();
      // } else {
      //   // This will trigger when none of the buttons has been pressed
      //   // and the innerHTML of this equals to something not in the buttons
      //   alert("Place holder, check the If statement");
      //
      // }

      // Playing Sound Using the switch statements
      // Use different var each time to keep things orginized
      switch(this.innerHTML) {
        case this.innerHTML = "lions":
        var animal1 = new Audio('lion.mp3').play();
        break
        case this.innerHTML = "alligator":
        var animal2 = new Audio('alligator.mp3').play();
        break
        case this.innerHTML = "camel":
        var animal3 = new Audio('camel.mp3').play();
        break
        case this.innerHTML = "cat":
        var animal4 = new Audio('cat.mp3').play();
        break
        case this.innerHTML = "cow":
        var animal5 = new Audio('cow.mp3').play();
        break
        case this.innerHTML = "dog":
        var animal6 = new Audio('dog.mp3').play();
        break
        case this.innerHTML = "dolphine":
        var animal7 = new Audio('dolphin.mp3').play();
        break
        case this.innerHTML = "eagle":
        var animal8 = new Audio('eagle.mp3').play();
        break
        case this.innerHTML = "elephants":
        var animal9 = new Audio('elephant.mp3').play();
        break
        case this.innerHTML = "goat":
        var animal10 = new Audio('goat.mp3').play();
        break
        case this.innerHTML = "gorilla":
        var animal11 = new Audio('gorilla.mp3').play();
        break
        case this.innerHTML = "horse":
        var animal12 = new Audio('horse.mp3').play();
        break
        case this.innerHTML = "monkeys":
        var animal13 = new Audio('monkeys.mp3').play();
        break
        case this.innerHTML = "rooster":
        var animal14 = new Audio('rooster.mp3').play();
        break
        case this.innerHTML = "wildbeast":
        var animal15 = new Audio('wildbeast.mp3').play();
        break
        default:
        alert("Place holder, check the switch statement");
      }


  }

);
}

//To play Sound:
//  we use the Audio contructor function which is based on the "JS Methods & multiple objects"
// To select an event from the addEventListener go to:
//  https://developer.mozilla.org/en-US/docs/Web/Events & in this link you will find
//  the event of click or keydown



// Playing Sounds Via Clicking on the button
//    Method 1. Creating Sound Functions
//      Sound Functions are Audio functions that play the mp3 files and are related
//      to the button's in the index.html page

// function animal1() {
//   new Audio('lion.mp3').play()
// };
//
// function animal2() {
//   new Audio('alligator.mp3').play()
// };
//
// function animal3() {
//   new Audio('camel.mp3').play()
// };
//
// function animal4() {
//   new Audio('cat.mp3').play()
// };
//
// function animal5() {
//   new Audio('cow.mp3').play()
// };
//
// function animal6() {
//   new Audio('dog.mp3').play()
// };
//
// function animal7() {
//   new Audio('dolphin.mp3').play()
// };
//
// function animal8() {
//   new Audio('eagle.mp3').play()
// };
//
// function animal9() {
//   new Audio('elephant.mp3').play()
// };
//
// function animal10() {
//   new Audio('goat.mp3').play()
// };
//
// function animal11() {
//   new Audio('gorilla.mp3').play()
// };
//
// function animal12() {
//   new Audio('horse.mp3').play()
// };
//
// function animal13() {
//   new Audio('monkey.mp3').play()
// };
//
// function animal14() {
//   new Audio('rooster.mp3').play()
// };
//
// function animal15() {
//   new Audio('wildebeest.mp3').play()
// };
//
//
// function animal1() {
//   new Audio('lion.mp3')
// };
//
// function animal2() {
//   new Audio('alligator.mp3')
// };
//
// function animal3() {
//   new Audio('camel.mp3')
// };
//
// function animal4() {
//   new Audio('cat.mp3')
// };
//
// function animal5() {
//   new Audio('cow.mp3')
// };
//
// function animal6() {
//   new Audio('dog.mp3')
// };
//
// function animal7() {
//   new Audio('dolphin.mp3')
// };
//
// function animal8() {
//   new Audio('eagle.mp3')
// };
//
// function animal9() {
//   new Audio('elephant.mp3')
// };
//
// function animal10() {
//   new Audio('goat.mp3')
// };
//
// function animal11() {
//   new Audio('gorilla.mp3')
// };
//
// function animal12() {
//   new Audio('horse.mp3')
// };
//
// function animal13() {
//   new Audio('monkey.mp3')
// };
//
// function animal14() {
//   new Audio('rooster.mp3')
// };
//
// function animal15() {
//   new Audio('wildebeest.mp3')
// };


// Playing Sounds Via Clicking on a button
//    Method 1. Utilizing a For loop, Event Listenter, If or the Switch statements
//    A For loop breakdown:
//      The first part is the items
//      The second part is the duration of the loop
//      The third part is the condition of how much chnages each time
//      The fourth part is code executed

//  The EventListener:
//    The below addEventListener has an anonymous function

//  For loop & EventListener:
//    The x will change based on the clicked "notes_set", because the addEventListener is wating for a specific click.
//    The for loop will execute based on the condition. adding the event listenter allows us to work with for loops without the need
//    for an if statements. Here we clearly running the for loop but for it to present its executions results
//    the x must change and for the x to change the user requires to make a click
//    In embedded SW I have written I usually run the loop and see the results right away of the elements in the array right always
//    In an addEventListener method the this keyword refers to the button that triggered the event

var forLoopLength = document.getElementsByClassName("notes_set").length;
for (var x = 0;
  (x < forLoopLength); x = x + 1) {
  document.getElementsByClassName("notes_set")[x].addEventListener("click", function() {

      // The varilable condition that changes based on triggering the anonymous function
      // The "this" keyword is whatever triggered the he anonymous function
      // The "this" keyword can be a button click or a keyboard click etc.
      console.log("The " + this.innerHTML + " Button had been clicked.");
      var buttonSpecificCondition = this.innerHTML;


      // Playing Sound Using the If statements
      //  Use different var each time to keep things orginized
      //  the double equal sign used because the type of console.log(this.innerHTML) is undefined and in the if statement we are writing strings
      // if (this.innerHTML == "lion") {
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
      // } else if (this.innerHTML == "elephant") {
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
      // } else if (this.innerHTML == "monkey") {
      //   var animal13 = new Audio('monkey.mp3').play();
      //
      // } else if (this.innerHTML == "rooster") {
      //   var animal14 = new Audio('rooster.mp3').play();
      //
      // } else if (this.innerHTML == "wildebeest") {
      //   var animal15 = new Audio('wildebeest.mp3').play();
      // } else {
      //   // This will trigger when none of the buttons has been pressed
      //   // and the innerHTML of this equals to something not in the buttons
      //   alert("Place holder, check the If statement");
      //
      // }

      // Playing Sound Using the switch statements
      //  Use different var each time to keep things orginized
      switch (this.innerHTML) {
        case this.innerHTML = "lion":
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
        case this.innerHTML = "elephant":
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
        case this.innerHTML = "monkey":
          var animal13 = new Audio('monkey.mp3').play();
          break
        case this.innerHTML = "rooster":
          var animal14 = new Audio('rooster.mp3').play();
          break
        case this.innerHTML = "wildebeest":
          var animal15 = new Audio('wildebeest.mp3').play();
          break
        default:
          alert("Place holder, check the switch statement");
      }


    }

  );
}




// Playing Sounds Via typing
// getElementById must be utilized because we are looking for an ind element
// The --> .target.value is used because target gives you the element that triggered the event. So, event.target.value retrieves the value of that element (an input field, in your example)

document.getElementById("inputText").addEventListener('change', updateValue);

function updateValue(results) {
  var textResults = document.getElementById("actualText").innerHTML
  textResults = results.target.value;
  // target gives you the element that triggered the event. So, event. target.
  // value retrieves the value of that element (an input field, in your example)

  if (textResults == "lion" || textResults == "Lion") {
    var animal1 = new Audio('lion.mp3').play();

  } else if (textResults == "alligator" || textResults == "Alligator") {
    var animal2 = new Audio('alligator.mp3').play();

  } else if (textResults == "camel" || textResults == "Camel") {
    var animal3 = new Audio('camel.mp3').play();

  } else if (textResults == "cat"  || textResults == "Cat") {
    var animal4 = new Audio('cat.mp3').play();

  } else if (textResults == "cow" || textResults == "Cow") {
    var animal5 = new Audio('cow.mp3').play();

  } else if (textResults == "dog" || textResults == "Dog") {
    var animal6 = new Audio('dog.mp3').play();

  } else if (textResults == "dolphine" || textResults == "Dolphine") {
    var animal7 = new Audio('dolphin.mp3').play();

  } else if (textResults == "eagle" || textResults == "Eagle") {
    var animal8 = new Audio('eagle.mp3').play();

  } else if (textResults == "elephant" || textResults == "Elephant"){
    var animal9 = new Audio('elephant.mp3').play();

  } else if (textResults == "goat" || textResults == "Goat") {
    var animal10 = new Audio('goat.mp3').play();

  } else if (textResults == "gorilla" || textResults == "Gorilla") {
    var animal11 = new Audio('gorilla.mp3').play();

  } else if (textResults == "horse" || textResults == "Horse") {
    var animal12 = new Audio('horse.mp3').play();

  } else if (textResults == "monkey" || textResults == "Monkey") {
    var animal13 = new Audio('monkey.mp3').play();

  } else if (textResults == "rooster" || textResults == "Rooster") {
    var animal14 = new Audio('rooster.mp3').play();

  } else if (textResults == "wildebeest" || textResults == "Wildebeest") {
    var animal15 = new Audio('wildebeest.mp3').play();
  } else {
    // This will trigger when none of the buttons has been pressed
    // and the innerHTML of this equals to something not in the buttons
    alert("The entered text does not have a sound associated with it.");


  }
}

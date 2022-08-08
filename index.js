// A For loop breakdown:
// -The first part is the items
// -The second part is the duration of the loop
// -The third part is the condition of how much chnages each time
// -The fourth part is code executed

// The EventListener:
// The below addEventListener has an anonymous function

// The For loop & EventListener:
// 1. The for loop will run for the times "notes_set" has been mentioned then because of the special conditions of the
// eventlistener method, each time we click on [x] the clicked on [x] is activated because that specifci button is also activated
// For example: [x] = 2 is the alligator button

for ( var x=0; (x<document.getElementsByClassName("notes_set").length); x=x+1) {

document.getElementsByClassName("notes_set")[x].addEventListener("click", function(){
  console.log('hi');
})
}

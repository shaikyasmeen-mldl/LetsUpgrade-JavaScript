// Question 1
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

// output is -

// Assignment1.js:1 122
// integer+string+string concatenates

// Assignment1.js:2 32
// first + concatenates but second + changes string to integer so they both get add and get concatinate with third string.

// Assignment1.js:3 02
// Again + concatinates but - here changes string to integer to give result 0 and gets concaninates woth third string to give result 02

// Assignment1.js:4 112
// Again concaninates

// Assignment1.js:5 NaN2
// - of strings in Js gives NaN and 2 got concatinated

// Assignment1.js:6 NaN
// whichever value given in place of 2 the result will be NaN

// Question 2

function result() {
  var input = document.getElementById("marks");
  //   console.log("your marks=", input.value);
  if (input.value > 90) {
    console.log("The grade for", input.value, "is AA");
  } else if (input.value > 80 && input.value <= 90) {
    console.log("The grade for", input.value, "is AB");
  } else if (input.value > 70 && input.value <= 80) {
    console.log("The grade for", input.value, "is BB");
  } else if (input.value > 60 && input.value <= 70) {
    console.log("The grade for", input.value, "is BC");
  } else if (input.value > 50 && input.value <= 60) {
    console.log("The grade for", input.value, "is CC");
  } else if (input.value > 40 && input.value <= 50) {
    console.log("The grade for", input.value, "is CD");
  } else if (input.value > 30 && input.value <= 40) {
    console.log("The grade for", input.value, "is DD");
  } else console.log("The grade for", input.value, "is FF");
}

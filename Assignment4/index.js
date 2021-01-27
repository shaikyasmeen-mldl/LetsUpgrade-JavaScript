//  Question 1
// By how many ways we can access elements in the DOM and write about them in brief?
// In three ways elements in DOM can access and these are-
// document.getElementById()
// this is used to access Id tags like id="some id"
// document.getElementsByClassName()
// this is used to access class tags like class="some class"
// document.getElementsByTagName()
// this is used to access tags like <h1></h1>




// Question 2

function calc() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('result').value = n1 + n2;

}

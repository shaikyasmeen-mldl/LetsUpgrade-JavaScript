// Quetion 1

const clothes = ['jacket', 't-shirt'];
console.log(clothes[0]);

// output is jacket
// here jacket index is 0 and t-shirt index is 1. Index of arrays start from 0,1,2,3.. and so on.


clothes.length = 0;
console.log(clothes[0]);

// output is undefined cause we declared length of array to zero.


// Question 2


var elements = [25, 74, 65, 87, 15, 35, 45],
    sum = 0,
    i;
for (i = 0; i < elements.length; i += 1) {
    sum += elements[i];
}
console.log("Sum of elements is", sum); 

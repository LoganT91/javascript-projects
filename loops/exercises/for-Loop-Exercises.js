/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//a
for (let l =0; l <= 20; l++) {
  console.log(l);
}
//b
for (let m = 3; m <= 29; m += 2) {
  console.log(m);
}
//c
for (let n = 12; n >= -14; n -= 2) {
  console.log(n);
}
//d
for (let p = 50; p >= 20; p--) {
  if (p % 3 === 0) {
    console.log(p); 
  }
  
}



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let lc = "LaunchCode";
let arr1 = [1, 5, 'LC101', 'blue', 42];
let rev = "";
for (s = 0; s < arr1.length; s++) {
  console.log(arr1[s]);
}


for (r = 0; r < lc.length; r++) {
  rev = lc[r] + rev;
}
console.log(rev);




/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [], odds = [];
for (i = 0; i <= 9; i++) {
  if (arr2[i] % 2 === 0) {
    evens.push(arr2[i]);
  } else {
    odds.push(arr2[i])
  }
}
console.log(evens);
console.log(odds);




let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}
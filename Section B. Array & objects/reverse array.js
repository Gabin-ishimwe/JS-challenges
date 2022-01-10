// we are going to write a js function that takes in an array
// and returns the reverse of that array

function reverse(arr1) {
     var arr2 = [];
     for (var i = arr1.length - 1; i >=0; i-- ) {
          arr2.push(arr1[i])
     }
     return arr2
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7 , 8 , 9, 10]))
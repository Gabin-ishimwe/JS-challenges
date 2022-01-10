// we are going to write a js function that take in an array
// and return it inverse by not using an intermediary array

function inplaceInverse(arr1) {
     for (var i = arr1.length - 1; i >= 0 ; i--) {
          arr1.push(arr1[i])


     }
     var len = arr1.length/2
     return arr1.slice(len)
     
}

console.log(inplaceInverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
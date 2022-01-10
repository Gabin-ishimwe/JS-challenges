// we are going to create a function that takes in an array of number
// and returns an array of prime number

function primenumber(arr1) {
     var arr2 = [];
     for (var i = 0; i < arr1.length; i++) {
          if (arr1[i] % 2 != 0){
               arr2.push(arr1[i]) 
          }

          else if (arr1[i] == 2) {
               arr2.push(arr1[i])
          }
          
     }

     return arr2

     
}

console.log(primenumber([1, 2, 4, 5, 6, 7, 8, 100, 21, 11, 25, 23, 22]))



// we are going to write a function that take in an array
// and sort it in descending order
// if there is a prime number it will be removed from the array

function sortByDescendingOrder(arr1) {
     var set = new Set (arr1)
     var arr2 = Array.from(set)
     var ordered = [...arr2]
     var orderedArr = ordered.sort((a,b)=> a - b)

     while (true) {
       for (var i = 0; i < arr2.length; i++) {
         if (arr2[i] > arr2[i + 1]) {
           var replace = arr2[i]
           arr2[i] = arr2[i + 1]
           arr2[i + 1] = replace
          //  console.log(arr2, "sorted using loops")
          //  console.log(ordered, "it is copy of arr2")
         }

         else {
           continue
         }
         
      }

      console.log(arr2) // arranged list in ascending order
      break 
     }
    //  return arr2
    var filterNumb = []
    for (var j = 0; j < arr2.length; j++) {
      if (arr2[j] % 2 != 0) {
        filterNumb.push(arr2[j])
      }

      else if (arr2[j] == 2) {
        filterNumb.push(arr2[j])
      }


    }

    console.log(filterNumb
      )

     
}

sortByDescendingOrder([1, 2, 2, 4, 3, 6, 5, 8, 10, 9, 9, 19, 13, 12, 11, 10, 22, 21, 20, 32, 31])

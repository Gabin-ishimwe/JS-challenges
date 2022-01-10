// we are going to find the occurence of each items in an array
// and find if that array contain majority elements

function countItems(array) {
     var countDict = {}
     var counting = 0
     for (var i = 0; i < array.length; i ++) {
          var counting = array[i]
          if (countDict.hasOwnProperty(counting)) {
               countDict[counting] += 1
               

               
          }
          else {
               countDict[counting] = 1
          }
     }
     console.log(countDict)
     var noMajorityCount = 0
     for (var num in countDict) {
          if (countDict[num] >= (array.length)/2) {
               console.log(num, " is the majority element")
     }

          else {
               noMajorityCount ++
               if (noMajorityCount == Object.keys(countDict).length) {
                    console.log("there is no majority element")
               }

               else {
                    continue
               }
               
          }
     }
     
}

countItems([2,2,1, 3, 4, 2, 4, 2])
// we are going to write a function that take in an array
// and returns a nested object

function nestedObject(arr1) {
     var dict = {secondName : "", age : ""};
     var values = []
     var another = []
     var final = {}
     for (var i = 0; i < arr1.length; i++) {
          var ish = arr1[i].split(",", 2)

          for (var j = 0; j < ish.length; j++) {
               if (j == 0) {
                    var kevin = ish[j].split(" ", 2)
                    ish[0] = kevin
                    // console.log(ish)
                    values.push(ish[0][0])
                    
                    dict["secondName"] = ish[0][1]
                    dict["age"] = ish[1]
                    var copy = {}
                    for (m in dict) {
                         copy[m] = dict[m]
                    }

                    another.push(copy)
                    // console.log(copy)
                    // console.log(values)
                    // console.log(another)                    
               }
          }

     }

     for (var p = 0; p < values.length; p++) {
               for(var q = 0; q < another.length; q++) {
                    if (p == q) {
                         final[values[p]] = another[q]
                         
                    }

                    else {
                         continue
                    }
               }
          }
          return final
     
}

console.log(nestedObject(["Patrick wyane, 30", "lil wyine, 32","Eric mimi, 21","Dodos deck, 22", "gabin ishimwe, 21", "achilles cesary, 29", "ngabo acxel, 30"]))
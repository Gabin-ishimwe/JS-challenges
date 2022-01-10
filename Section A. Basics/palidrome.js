// we are going to write a function that takes in a string
// and return a bool value if it is a palindrome

function palydrome(word) {
     var string = ""
     for (var i = word.length - 1; i >= 0; i--) {
          string += word[i]
     }

     if (string == word) {
          return true
     }

     else {
          return false
     }
}

console.log(palydrome("level"))
 var fs = require("fs");
 var request = require('request');
 var words = [];
var counts = [];


 fs.readFile("scrape.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    var lyricsbody=data
    
     //console.log(lyricsbody)
// this is just to clean that bs up prob should be its own function at some point
 var Test = lyricsbody
 Test = Test.replace(/,/g, "");
 Test = Test.replace(/-/g, " ");
 Test = Test.replace(/'/g,"");
 Test = Test.replace(/\(/g,"");
 Test = Test.replace(/\)/g,"");
 Test = Test.replace(/\n/g, " ")
 Test = Test.replace(/\./g,"")


 fs.appendFile("output.txt", Test ,  function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log ("Cleaned Text best we could.")
    console.log("Wrote formatted Lyrics to output.text")

   });
 })

// // we may need to add something to remove parentheses 
// // console.log(Test)

// //  console.log(Array1)

//  calculate([Array1]);



// function calculate(inputs) {
//     for (var i = 0; i < inputs.length; i++) {
//         var isExist = false;
//         for (var j = 0; j < words.length; j++) {
//             if (inputs[i] == words[j]) {
//                 isExist = true
//                 counts[i] = counts[i] + 1;
//             }
//         }
//         if (!isExist) {
//             words.push(inputs[i]);
//             counts.push(1);
//         }
//         isExist = false;
//     }
    
//         console.log(words);
//         console.log(words.length)
//         console.log(counts);
// })
// }


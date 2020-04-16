// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

// If you haven't done so yet, create the workspace/javascript/overly-excited directory structure in your home directory. Open your terminal and enter in the following command.

// mkdir -p ~/workspace/javascript/overly-excited
// Now that you have created the directory, you want to change to that directory so that you can add files to it.

// cd ~/workspace/javascript/overly-excited
// Create an index.html file in this directory with the touch command.

// Create an overly-excited.js file in this directory with the touch command.

// Copy the following code and paste it into the index.html file. Notice that the overly-excited.js file is properly linked so that when you load this HTML file in a web browser, the logic in that file will be executed.

// Open the index.html file in your web browser.

// At this point, you will simply see a blank web page because you have no content in the HTML file. Open your developer tools using the Option+Command+I keyboard shortcut.

// At the top of the developer tools panel, you will see the word Console. Click on that word. The console.log() statement will output any message into this panel in your developer tools. You can try it out immediately by clicking in the Console panel, and typing console.log("Hello, world!"), and then pressing your return key.

// function addExcitement(sentence){
//     console.log(`${sentence} !!`)
// }
//  addExcitement("hi, there")



// Create an array that contains the words in the sentence
 let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// function addExcitement(theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string

//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         //         // Concatenate the new word onto buildMeUp
//         //         buildMeUp += `${theWordArray[i]}`
//         //         console.log(buildMeUp)
//         //     }

//         if ((i+1) % 3 === 0) {
//             buildMeUp += `${theWordArray[i]}! `
//         } else {
//             buildMeUp += `${theWordArray[i]} `
//         }
//         console.log(buildMeUp)
//     }

// }

// Invoke the function and pass in the array
// addExcitement(sentence)


// function addExcitement(theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string

    // let buildMeUp = ""

    // for (let i = 0; i < theWordArray.length; i++) {
        //         // Concatenate the new word onto buildMeUp
        //         buildMeUp += `${theWordArray[i]}`
        //         console.log(buildMeUp)
        //     }

//         if ((i+1) % 3 === 0) {
//             buildMeUp += `${theWordArray[i]}${punctuation}`
//         } else {
//             buildMeUp += `${theWordArray[i]} `
//         }
//         console.log(buildMeUp)
//     }

// }

// Invoke the function and pass in the array

// addExcitement(sentence,"=")

// function addExcitement(theWordArray, punctuation, howMany) {

//     // Each time the for loop executes, you're going to add one more word to this string

//     let buildMeUp = ""
//       for (let i = 0; i < theWordArray.length; i++) {
//         //         // Concatenate the new word onto buildMeUp
//         //         buildMeUp += `${theWordArray[i]}`
//         //         console.log(buildMeUp)
//         //     }

//         if ((i+1) % 3 === 0) {
//             buildMeUp += theWordArray[i]
//             for (let k = 0; k < howMany; k++){
//             buildMeUp += punctuation
//             }
//         } else {
//             buildMeUp += `${theWordArray[i]} `
//         }
//         console.log(buildMeUp)
//     }

// }

// Invoke the function and pass in the array

// addExcitement(sentence,"!", 6)

let addExcitement = (theWordArray, punctuation, howMany) => {

    // Each time the for loop executes, you're going to add one more word to this string

    let buildMeUp = ""
      for (let i = 0; i < theWordArray.length; i++) {
        //         // Concatenate the new word onto buildMeUp
        //         buildMeUp += `${theWordArray[i]}`
        //         console.log(buildMeUp)
        //     }

        if ((i+1) % 3 === 0) {
            buildMeUp += theWordArray[i]
            for (let k = 0; k < howMany; k++){
            buildMeUp += punctuation
            }
        } else {
            buildMeUp += `${theWordArray[i]} `
        }
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array

addExcitement(sentence,"#", 7)
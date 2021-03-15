/** 
 * Assessment 1.1 
 * 
 * Please read each question carefully and answer with the according type specified. This assessment is WITHOUT
 * notes or Google. You will be screensharing while attempting this assessment, so please make sure to be sharing your
 * entire desktop when attempting it. 
 * 
 * Best of luck, and ask any of the professors for help if needed!
 * 
 * Time allotment: 1 hour
 * 
**/

/*****************************************/

/** 
 * QUESTION #1 -
 * What is the difference between a method and a function?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */ 

"a method is something you can use in a function, a function actually runs the method"

/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; i = timesToLoop; i++) {
    console.log('I am looping!');
}

"i is set to = instead of < which would make the function stop when it hits 15"

/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"if, else"

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function? 
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"to create a for loop, to make a grid or something"

/**
 * QUESTION #5 -
 * Which of the following answers allows JavaScript to programmatically generate a new HTML element?
 * 
 * A) dom.createElement('div');
 * B) document.element('div');
 * C) document.createElement('div');
 * D) document.cloneElement('div');
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"C"

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"document object management"

/**
 * QUESTION #7 -
 * What is the output of the function?
 * 
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
    let statement = "Assessments are fun, right?!";

    if (statement === true) {
        console.log('Yes!');
    } else {
        console.log('No!');
    }
}

"Yes! will show up in the console log"

/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 * 
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

"They are integers"

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"to create an immediate result when something is clicked"

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = 'CODEM-9';
switch (value) {
    case "CODEM7":
        console.log('The answer is cupcakes!');
    case "CODEM8":
        console.log('The answer is pancakes!');
    case "CODEM9":
        console.log('The answer is french fries!');
    default:
        console.log('We are out of food...');
};

"The answer is french fries!"

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid. 
 * 
 * Answer Type: Function
 */

function createGrid(width, height) {
    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div');

        for (let j = 0; j < 10; j++) {
            let square = document.createElement('div');
            square.classListadd('square');
        }
    }

}

/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"a local variable is something you create, like pamConfig, a global variable is something that is always set for all developers"

/**
 * QUESTION #13 - (EXTRA CREDIT!)
 * What is the default method of a fetch request?
 * 
 * A) GET
 * B) POST
 * C) PATCH
 * D) DELETE
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Post"
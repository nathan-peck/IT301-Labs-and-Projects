let answer;
let currentMessage ="What was the total restaurant bill amount in dollars?";
let isInvalid;

do {
    answer = Number(prompt(currentMessage));

    isInvalid = false;


    if (isNaN(answer)) {
        currentMessage = "Invalid input. Please enter a numeric bill amount."

        isInvalid = true;
    }

    else if (answer < 0) {
        currentMessage = "Negative amounts are not allowed. Please enter a valid bill amount."

        isInvalid = true;
    }


    else if (answer == 0) {
        currentMessage = "Please enter a bill amount greater than zero."

        isInvalid = true;
    }


    
} while (isInvalid);

let tip = answer * 0.1;

console.log(`For a bill of $${answer}, the tip should be $${tip}.`);
document.write(`For a bill of $${answer}, the tip should be $${tip}.`);



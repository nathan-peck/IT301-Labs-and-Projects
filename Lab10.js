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

console.log(`Text: ${answer}`);



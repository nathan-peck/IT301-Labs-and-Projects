let answer = Number(prompt("What was the total restaurant bill amount in dollars?"));


do {
    let NewAnswer = Number(prompt("Please enter a valid bill amount greater than zero."));
} while (NewAnswer == 0);


/*
do {
    let NewAnswer = Number(prompt("Please enter a non-negative bill amount."));
} while (NewAnswer < 0);
 */

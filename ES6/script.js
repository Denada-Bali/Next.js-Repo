const prompt = require ("prompt-sync")()

/**
 * TODO: First Solution
 */

const person={
    my_balance: 2000
};

const withdraw = (person, amount) =>
    (amount > person.my_balance)
    ? `\nSorry! Withdrawal cannot be processed due to insufficient funds.\nYour balance is: $${person.my_balance}`
    : (person.my_balance -= amount, `Withdrawal successful!\nYour new balance is: $${person.my_balance}`);

//withdraw(person, 500);
//withdraw(person, 1600);



/**
 * TODO: Second Solution
 */

const withdraw_s_way = (person, amount) => {
    do {
        amount = prompt("Enter the amount: $");

        if (amount > person.my_balance)
        console.log(`\nSorry! Withdrawal cannot be processed due to insufficient funds.\n Your balance is:  $${person.my_balance}`)

    } while (amount > person.my_balance);

    if (amount <= person.my_balance) {

        person.my_balance = person.my_balance - amount
        console.log(`\nWithdrawal successful!\nYour new balance is: $${person.my_balance}`)
    }
}
//withdraw_s_way(person);


/**
 * TODO: Third Solution
 */
const withdraw_th_way = (person, amount) => {
    for (;;) {
        amount = prompt("Enter the amount: $");

        const store_result = (amount > person.my_balance) // variabla store_result ruan rezultatin e ternary operator
            ? `\nSorry! Withdrawal cannot be processed due to insufficient funds.\nYour balance is: $${person.my_balance}`
            : (person.my_balance -= amount, `Withdrawal successful!\nYour new balance is: $${person.my_balance}`);

        console.log(store_result);

        if (amount <= person.my_balance) break;
    }
};
//withdraw_th_way(person);

/**
 * TODO: Fourth Solution
 */
const withdraw_f_way = (person) => {
    let amount = prompt("Enter the amount: $");
    let verify;

    (amount > person.my_balance) ? verify = 'insufficient' : verify = 'valid';

    switch (verify) {
        case 'insufficient':
            console.log(`\nSorry! Withdrawal cannot be processed due to insufficient funds.\nYour balance is: $${person.my_balance}`);
            withdraw_f_way(person); // Recursively call per te rivendosur amount
            break;
        case 'valid':
            person.my_balance -= amount;
            console.log(`\nWithdrawal successful!\nYour new balance is: $${person.my_balance}`);
            break;
        default:
            console.log("Sorry, something went wrong. Try again.");
            break;
    }
};
//withdraw_f_way(person);


/**
 * TODO: Menu
 */

const selectSolution = () => {
    const select = prompt("Select one of the below solutions to perform the task (only numbers are allowed): ");

    const handleInfo = (message) => {
        const info_variable = prompt("Do you want to know more about the solution? Press 'y' for Yes or 'n' for No: ");
        if (info_variable.toLowerCase() === 'y') {
            console.log(message);
        }
    };

    switch (select) {
        case '1':
            console.log("****************   Solution  1  **************************");
        console.log(withdraw(person, 800));
        console.log(withdraw(person, 1500));
            handleInfo("The withdraw function is developed using if-else conditions to check if the withdrawal amount is valid based on the balance, without needing any user prompts.");
            break;

        case '2':
            console.log("\n****************   Solution  2  **************************");
            withdraw_s_way(person);
            handleInfo("The withdraw function is built using a do-while loop and an if-else condition to repeatedly ask for the withdrawal amount, then it updates the balance.");
            break;

        case '3':
            console.log("\n****************   Solution  3  **************************");
            withdraw_th_way(person);
            handleInfo("The withdraw function uses an infinite for loop with if-else conditions to keep asking for a valid withdrawal amount, until it can be processed.");
            break;

        case '4':
            console.log("\n****************   Solution  4  **************************");
            withdraw_f_way(person);
            handleInfo("The withdraw function uses an if-else condition to check the balance, then a switch statement to either retry the withdrawal if funds are insufficient or complete it if the amount is valid.");
            break;

        default:
            console.log("Invalid selection. Please enter a number between 1 and 4.");
            break;
    }
};

selectSolution();


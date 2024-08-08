const prompt = require ("prompt-sync")()

/**
 * TODO: First Solution
 */

var person={
    my_balance: 2000
};


function withdraw(person, amount){

if (amount > person.my_balance) {
    console.log(`\nSorry! Withdrawal cannot be processed due to insufficient funds.\n Your balance is:  $${person.my_balance}`)

    }else if (amount <= person.my_balance) {

        person.my_balance = person.my_balance - amount
    console.log(`Withdrawal successful!\nYour new balance is: $${person.my_balance}`)
}
}



/**
 * TODO: Second Solution
 */
function withdraw_s_way(person, amount){

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




/**
 * TODO: Third Solution
 */
function withdraw_th_way(person, amount){

        for (;;) {
            amount = prompt("Enter the amount: $");

            if (amount > person.my_balance){
                console.log(`\nSorry! Withdrawal cannot be processed due to insufficient funds.\n Your balance is:  $${person.my_balance}`)
                continue;
            }else if (amount <= person.my_balance) {
                person.my_balance = person.my_balance - amount
                console.log(`\nWithdrawal successful!\nYour new balance is: $${person.my_balance}`)
                break;
            }
        }
}



/**
 * TODO: Fourth Solution
 */
function withdraw_f_way(person, amount){

    let verify;

    amount = prompt("Enter the amount: $");

    if (amount > person.my_balance){
        verify='insufficient'
    }else{
        verify='valid'
    }

    switch (verify) {
        case 'insufficient':
            console.log(`\nSorry! Withdrawal cannot be processed due to insufficient funds.\n Your balance is:  $${person.my_balance}`)
            withdraw_f_way(person)
            break;
        case 'valid':
            person.my_balance -= amount
            console.log(`\nWithdrawal successful!\nYour new balance is: $${person.my_balance}`)
            break;
        default:
            console.log("Sorry, something went wrong there. Try again.")
            break;
    }
}




let select = prompt("Select one of the below solutions to perform the task (only numbers are allowed): ");


switch (select) {
    case '1':
        console.log("****************   Solution  1  **************************");

        withdraw(person, 800)
        withdraw(person, 1500)

        var info = prompt("Do you want to know more about the solution? Press 'y' for Yes or 'n' for No: ");
        if (info === 'y' || info === 'Y') {
            console.log("The withdraw function is developed using if-else conditions to check if the withdrawal amount is valid based on the balance, without needing any user prompts.");
        } else {}
        break;

    case '2':
        console.log("\n****************   Solution  2  **************************");
        withdraw_s_way(person);

        var info = prompt("Do you want to know more about the solution? Press 'y' for Yes or 'n' for No: ");
        if (info === 'y' || info === 'Y') {
            console.log("The withdraw function is built using a do-while loop and an if-else condition to repeatedly ask for the withdrawal amount, then it updates the balance.");
        } else {}
        break;

    case '3':
        console.log("\n****************   Solution  3  **************************");
        withdraw_th_way(person);

        var info = prompt("Do you want to know more about the solution? Press 'y' for Yes or 'n' for No: ");
        if (info === 'y' || info === 'Y') {
            console.log("The withdraw function uses an infinite for loop with if-else conditions to keep asking for a valid withdrawal amount, until it can be processed");
        } else {}
        break;

    case '4':
        console.log("\n****************   Solution  4  **************************");
        withdraw_f_way(person);

        var info = prompt("Do you want to know more about the solution? Press 'y' for Yes or 'n' for No: ");
        if (info === 'y' || info === 'Y') {
            console.log("The withdraw function uses an if-else condition to check the balance, then a switch statement to either retry the withdrawal if funds are insufficient or complete it if the amount is valid.");
        } else {}
        break;

    default:
        console.log("Invalid selection. Please enter a number between 1 and 4.");
        break;
}


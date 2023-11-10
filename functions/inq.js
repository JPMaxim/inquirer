import inquirer from 'inquirer';

export async function nameFunc() {
    return await inquirer.prompt({
        name: "name",
        type: "input",
        message: "What's your name?"
    })
}

export async function roundsFunc() {
    return await inquirer.prompt({
        name: "value",
        type: "list",
        message: "How many rounds will you play?",
        "choices": [1, 3, 5]
    })
}

export async function weaponFunc() {
    return await inquirer.prompt({
        name: "weapon",
        type: "list",
        message: "Choose your weapon:",
        "choices": ["rock", "paper", "scissors"]
    })
}
// function myFunction() {
//     const input = document.getElementById("range");
//     console.log(range);
//     const btn = document.getElementById("button");
//     let maxNum = input.value;
//     const randomNum = Math.floor(Math.random() * maxNum) + 1
//     console.log(randomNum);
//     input.setAttribute("id", "guess");
//     const guess = document.getElementById("guess");
//     console.log(guess);
//     input.setAttribute("placeholder", `Guess the number between 1 and ${maxNum}`);
//     button.innerText = `Guess ${guess}`;
// }
// if (input.id === 'range') {
//     function myFunction() {
//         const input = document.getElementById("range");
//         console.log(range);
//         const btn = document.getElementById("button");
//         let maxNum = input.value;
//         const randomNum = Math.floor(Math.random() * maxNum) + 1
//         console.log(randomNum);
//         input.setAttribute("id", "guess");
//         input.setAttribute("placeholder", `Guess the number between 1 and ${maxNum}`);
//     }
// }
// else {
//     function myFunction() {
//         const guess = document.getElementById("guess");
//         console.log(guess);
//         button.innerText = `Guess ${guess}`;
//     }
// }
const div = document.getElementById("container");
const input = document.getElementById("range");
const btn = document.getElementById("button");
const newInput = document.createElement('input');
const newBtn = document.createElement('button');
let count = 1;

function myFunction() {
    // const div = document.getElementById("container");
    // const input = document.getElementById("range");
    // const btn = document.getElementById("button");
    let maxNum = input.value;

    while (!maxNum) {
        input.value = "";
        return document.getElementById("result").innerText = `Enter a number and click the button`;

    }
    document.getElementById("result").innerText = ``;
    const randomNum = Math.floor(Math.random() * maxNum) + 1;

    console.log(randomNum);
    input.remove();
    btn.remove();
    // const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.placeholder = `Guess the number between 1 and ${maxNum}`;
    div.append(newInput);


    // const newBtn = document.createElement('button');

    newBtn.innerText = `Guess`;
    let newFuction = `guess(${randomNum})`
    newBtn.setAttribute('onclick', `${newFuction}`);
    div.append(newBtn);
}

function guess(randomNum) {
    console.log(count);
    let userGuess = parseInt(newInput.value);
    let restart = document.getElementById('restart');
    while (!userGuess) {
        input.value = "";
        return document.getElementById("result").innerText = `Guess a number and click the button`;

    }
    document.getElementById("result").innerText = ``;
    if (userGuess === randomNum) {
        if (count === 1) {
            newBtn.remove();
            newInput.remove();
            restart.style.display = 'block';
            return document.getElementById("result").innerText = `WOW! You guessed the random number in a single try!!!`;

        }
        else {
            newBtn.remove();
            newInput.remove();
            restart.style.display = 'block';
            return document.getElementById("result").innerText = `You took ${count} chances to guess the number `;


        }
    }
    else {
        count++;
        newInput.value = '';
        if (userGuess > randomNum) {
            return document.getElementById("result").innerText = `No, try a lesser number than ${userGuess}`;
        }
        else {
            return document.getElementById("result").innerText = `No, try a higher number than ${userGuess}`;
        }



    }
}

function restart() {
    location.reload();
}


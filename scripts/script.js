console.log("Hello world!");

// const wordleWord = ['R','A','I','S','E'];

document.addEventListener("DOMContentLoaded", () => {

const keys = document.querySelectorAll(".keyboard-row button");

for (let i = 0; i < keys.length; i++) {

    keys[i].onclick = ( { target } ) => {

        const key = target.getAttribute("data-key");

        console.log(key);

    }
}

});
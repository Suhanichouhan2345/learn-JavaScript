function exe() {
    setTimeout(() => {
        sayHi();
    }, 3000);

    console.log("2nd message");
}

function sayHi() {
    console.log("Hello");
}

setTimeout(() => {
    exe();
}, 5000);
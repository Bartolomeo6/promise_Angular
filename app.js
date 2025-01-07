const myDate = new Date();

const getMyTime = () => {
    setTimeout(() => {
        console.log("Twój czas i data to: " + myDate);
    }, 1230)
}

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("pracuję nad tym...");
        resolve();
    }, 800)
}).then(() => {
    getMyTime();
}).then(() => {
    console.log("end!");
}).then((response) => {
    console.log(response);
})


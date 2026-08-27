// ============================================================
// COUNTDOWN TIMER & NOTIFICATION APP
// Attempted Tasks: 1, 2, 4, 5, 8, 9, 10, 11, 12, 13
// ============================================================


// ============================================================
// TASK 1: Node.js Development Setup & Running Node.js Files
// ============================================================

console.log("Countdown App Ready");


// ============================================================
// TASK 2: V8, libuv & Event Loop
// ============================================================

// V8 executes JavaScript code.
// libuv provides the event loop and handles asynchronous operations.
// While setTimeout() is waiting in the background, Node.js can
// continue executing other synchronous JavaScript code.

setTimeout(() => {
    console.log("Background timer finished.");
}, 2000);

console.log("This message prints immediately before the timer.");


// ============================================================
// TASK 4: Node.js REPL / Date Calculation
// ============================================================

// The same calculation can be tested in the Node.js REPL:
//
// const d1 = new Date();
// const d2 = new Date(d1.getTime() + 5000);
// (d2 - d1) / 1000
//
// Result: 5 seconds

const d1 = new Date();
const d2 = new Date(d1.getTime() + 5000);

console.log("Seconds between dates:", (d2 - d1) / 1000);


// ============================================================
// TASK 5: Command-Line Argument & process.stdin
// ============================================================

// Run:
// node countdown.js 10
//
// The duration is obtained from process.argv.

let duration = parseInt(process.argv[2]);

if (isNaN(duration) || duration <= 0) {
    console.log("Please provide a positive duration.");
    console.log("Example: node countdown.js 5");
    process.exit(1);
}

console.log(`\nCountdown started for ${duration} seconds.`);
console.log('Type "cancel" and press Enter to stop early.');


// ============================================================
// TASK 8: Callback-Based Function
// ============================================================

function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {

        if (seconds < 0) {
            callback(new Error("Duration cannot be negative"), null);
            return;
        }

        callback(null, seconds);

    }, 1000);
}


// ============================================================
// TASK 9: setInterval, clearInterval & setTimeout
// ============================================================

function startCountdown(seconds) {
    let remaining = seconds;

    const interval = setInterval(() => {
        console.log(`${remaining} seconds remaining`);

        if (remaining === 0) {
            clearInterval(interval);
            console.log("Time's up!");
            return;
        }

        remaining--;
    }, 1000);
}


// ============================================================
// TASK 10: Promise-Based Function
// ============================================================

function checkTimeLeftPromise(seconds) {

    return new Promise((resolve, reject) => {

        if (seconds < 0) {
            reject(new Error("Duration cannot be negative"));
            return;
        }

        setTimeout(() => {
            resolve(seconds);
        }, 1000);

    });
}


// ============================================================
// TASK 11: Async-Await & Try-Catch
// ============================================================

async function runCountdownAsync(seconds) {

    try {

        // Demonstrate catch block for invalid duration.
        if (seconds < 0) {
            await checkTimeLeftPromise(seconds);
        }

        const remaining = await checkTimeLeftPromise(seconds);

        console.log(
            "Async/Await: Time remaining =",
            remaining,
            "seconds"
        );

    } catch (error) {

        console.log("Caught error:", error.message);

    }
}


// Demonstrate Task 11 with an invalid duration.
runCountdownAsync(-5);


// ============================================================
// TASK 12: Recursion, Call Stack & Queue
// ============================================================

// Plain recursive countdown.
// A very large number can cause:
// "Maximum call stack size exceeded"
// because every recursive call is kept on the call stack.

function recursiveCountdown(n) {

    if (n <= 0) {
        console.log("Recursive countdown finished.");
        return;
    }

    console.log(n);

    recursiveCountdown(n - 1);
}

// Small example works safely.
recursiveCountdown(3);

// FIX:
// For a very large countdown, use a loop or setInterval()
// instead of deep recursion to avoid overflowing the call stack.


// ============================================================
// TASK 13: Event Loop — setTimeout + Promise + console.log
// ============================================================

console.log("\n--- Event Loop Demonstration ---");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise then");
});

console.log("Synchronous console.log");

// Predicted and actual order:
// Synchronous console.log
// Promise then
// setTimeout
//
// Prediction: CORRECT.
// Synchronous code runs first, then microtasks (Promise),
// then macrotasks such as setTimeout.


// ============================================================
// TASK 8 + TASK 10 DEMONSTRATION
// ============================================================

// Callback version
checkTimeLeftCallback(duration, (error, remaining) => {

    if (error) {
        console.error("Callback Error:", error.message);
        return;
    }

    console.log(
        "Callback result:",
        remaining,
        "seconds"
    );

});


// Promise version using .then() and .catch()
checkTimeLeftPromise(duration)
    .then((remaining) => {

        console.log(
            "Promise result:",
            remaining,
            "seconds"
        );

    })
    .catch((error) => {

        console.error(
            "Promise Error:",
            error.message
        );

    });


// ============================================================
// START FINAL COUNTDOWN
// ============================================================

startCountdown(duration);


// ============================================================
// TASK 5: process.stdin - Cancel Countdown
// ============================================================

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {

    if (input.trim().toLowerCase() === "cancel") {

        console.log("Countdown cancelled.");
        process.exit(0);

    }

});

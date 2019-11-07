const readlineSync = require("readline-sync");

const tn = Number(readlineSync.question("\nEnter a number: "));

if (!Number.isInteger(tn)) {
    console.log("\nInvalid.\n")

} else if (tn < (Number.MIN_SAFE_INTEGER)) {
   console.log("\nInvalid.\n")

} else if (tn > (Number.MAX_SAFE_INTEGER)) {

} else if (tn < 0) {
   console.log("\nNegative.\n")

} else if (tn == 0) {
   console.log("\nZero.\n")

} else if (tn > 0) {
   console.log("\nPositive.\n")

} else {
   console.log("\nInvalid.\n")
}

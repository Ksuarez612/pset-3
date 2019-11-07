const readlineSync = require("readline-sync");

const t = Number(readlineSync.question("\nEnter a temperature: "));
const s = String(readlineSync.question("Enter a scale: "))

const ffp = 32;
const fbp = 212;
const cfp = 0;
const cbp = 100;
const kfp = 273;
const kbp = 373;


if (t < (Number.MIN_SAFE_INTEGER) || t > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.\n")

} else if (t <= ffp && (s == "F" || s == "f")){
      console.log("\nSolid.\n")

} else if ((t > ffp && t < fbp) && (s == "F" || s == "f")){
      console.log("\nLiquid.\n")

} else if (t >= fbp && (s == "F" || s == "f")){
      console.log("\nGas.\n")

} else if (t <= cfp && (s == "C" || s == "c")){
      console.log("\nSolid.\n")

} else if ((t > cfp && t < cbp) && (s == "C" || s == "c")){
      console.log("\nLiquid.\n")

} else if (t >= cbp && (s == "C" || s == "c")){
      console.log("\nGas.\n")

} else if (t <= kfp && (s == "K" || s == "k")){
      console.log("\nSolid.\n")

} else if ((t > kfp && t < fbp) && (s == "K" || s == "k")){
      console.log("\nLiquid.\n")

} else if (t >= kbp && (s == "K" || s == "k")){
      console.log("\nGas.\n")

} else {
      console.log("\nInvalid.\n")
}

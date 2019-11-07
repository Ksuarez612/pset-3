const readlineSync = require("readline-sync");

const c = String(readlineSync.question("\nEnter a playing card: "));

let ace = "\nAce"
let king = "\nKing"
let queen = "\nQueen"
let jack = "\nJack"
let ten = "\nTen"
let nine = "\nNine"
let eight = "\nEight"
let seven = "\nSeven"
let six = "\nSix"
let five = "\nFive"
let four = "\nFour"
let three = "\nThree"
let two = "\nTwo"

let spades = " of Spades.\n"
let hearts = " of Hearts.\n"
let diamonds = " of Diamonds.\n"
let clubs = " of Clubs.\n"

if (c == "AS" || c == "as"){
    console.log(ace.concat(spades) + "")
} else if (c == "AH" || c == "ah"){
    console.log(ace.concat(hearts) + "")
} else if (c == "AD" || c == "ad"){
    console.log(ace.concat(diamonds) + "")
} else if (c == "AC" || c == "ac"){
    console.log(ace.concat(clubs) + "")
} else if (c == "KS" || c == "ks"){
    console.log(king.concat(spades) + "")
} else if (c == "KH" || c == "kh"){
    console.log(king.concat(hearts) + "")
} else if (c == "KD" || c == "kd"){
    console.log(king.concat(diamonds) + "")
} else if (c == "KC" || c == "kc"){
    console.log(king.concat(clubs) + "")
} else if (c == "QS" || c == "qs"){
    console.log(queen.concat(spades) + "")
} else if (c == "QH" || c == "qh"){
    console.log(queen.concat(hearts) + "")
} else if (c == "QD" || c == "qd"){
    console.log(queen.concat(diamonds) + "")
} else if (c == "QC" || c == "qc"){
    console.log(queen.concat(clubs) + "")
} else if (c == "JS" || c == "js"){
    console.log(jack.concat(spades) + "")
} else if (c == "JH" || c == "jh"){
    console.log(jack.concat(hearts) + "")
} else if (c == "JD" || c == "jd"){
    console.log(jack.concat(diamonds) + "")
} else if (c == "JC" || c == "jc"){
    console.log(jack.concat(clubs) + "")
} else if (c == "TS" || c == "ts"){
    console.log(ten.concat(spades) + "")
} else if (c == "TH" || c == "th"){
    console.log(ten.concat(hearts) + "")
} else if (c == "TD" || c == "td"){
    console.log(ten.concat(diamonds) + "")
} else if (c == "TC" || c == "tc"){
    console.log(ten.concat(clubs) + "")
} else if (c == "9S" || c == "9s"){
    console.log(nine.concat(spades) + "")
} else if (c == "9H" || c == "9h"){
    console.log(nine.concat(hearts) + "")
} else if (c == "9D" || c == "9d"){
    console.log(nine.concat(diamonds) + "")
} else if (c == "9C" || c == "9c"){
    console.log(nine.concat(clubs) + "")
} else if (c == "8S" || c == "8s"){
    console.log(eight.concat(spades) + "")
} else if (c == "8H" || c == "8h"){
    console.log(eight.concat(hearts) + "")
} else if (c == "8D" || c == "8d"){
    console.log(eight.concat(diamonds) + "")
} else if (c == "8C" || c == "8c"){
    console.log(eight.concat(clubs) + "")
} else if (c == "7S" || c == "7s"){
    console.log(seven.concat(spades) + "")
} else if (c == "7H" || c == "7h"){
    console.log(seven.concat(hearts) + "")
} else if (c == "7D" || c == "7d"){
    console.log(seven.concat(diamonds) + "")
} else if (c == "7C" || c == "7c"){
    console.log(seven.concat(clubs) + "")
} else if (c == "6S" || c == "6s"){
    console.log(six.concat(spades) + "")
} else if (c == "6H" || c == "6h"){
    console.log(six.concat(hearts) + "")
} else if (c == "6D" || c == "6d"){
    console.log(six.concat(diamonds) + "")
} else if (c == "6C" || c == "6c"){
    console.log(six.concat(clubs) + "")
} else if (c == "5S" || c == "5s"){
    console.log(five.concat(spades) + "")
} else if (c == "5H" || c == "5h"){
    console.log(five.concat(hearts) + "")
} else if (c == "5D" || c == "5d"){
    console.log(five.concat(diamonds) + "")
} else if (c == "5C" || c == "5c"){
    console.log(five.concat(clubs) + "")
} else if (c == "4S" || c == "4s"){
    console.log(four.concat(spades) + "")
} else if (c == "4H" || c == "4h"){
    console.log(four.concat(hearts) + "")
} else if (c == "4D" || c == "4d"){
    console.log(four.concat(diamonds) + "")
} else if (c == "4C" || c == "4c"){
    console.log(four.concat(clubs) + "")
} else if (c == "3S" || c == "3s"){
    console.log(three.concat(spades) + "")
} else if (c == "3H" || c == "3h"){
    console.log(three.concat(hearts) + "")
} else if (c == "3D" || c == "3d"){
    console.log(three.concat(diamonds) + "")
} else if (c == "3C" || c == "3c"){
    console.log(three.concat(clubs) + "")
} else if (c == "2S" || c == "2s"){
    console.log(two.concat(spades) + "")
} else if (c == "2H" || c == "2h"){
    console.log(two.concat(hearts) + "")
} else if (c == "2D" || c == "2d"){
    console.log(two.concat(diamonds) + "")
} else if (c == "2C" || c == "2c"){
    console.log(two.concat(clubs) + "")
} else {
  console.log("\nInvalid\n")
}

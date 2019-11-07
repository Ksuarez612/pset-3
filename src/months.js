const readlineSync = require("readline-sync");

const tm = String(readlineSync.question("\nEnter a month: "));

if (tm == "January" || tm == "january" || tm == "Jan" || tm == "jan") {
      console.log("\n31 days.\n")

} else if (tm == "February" || tm == "february" || tm == "Feb" || tm == "feb") {
      console.log("\n28 or 29 days.\n")

} else if (tm == "March" || tm == "march" || tm == "Mar" || tm == "mar") {
      console.log("\n31 days.\n")

} else if (tm == "April" || tm == "april" || tm == "Apr" || tm == "apr") {
      console.log("\n30 days.\n")

} else if (tm == "May" || tm == "may") {
      console.log("\n31 days.\n")

} else if (tm == "June" || tm == "june" || tm == "Jun" || tm == "jun") {
      console.log("\n30 days.\n")

} else if (tm == "July" || tm == "july" || tm == "Jul" || tm == "jul") {
      console.log("\n31 days.\n")

} else if (tm == "August" || tm == "august" || tm == "Aug" || tm == "aug") {
      console.log("\n31 days.\n")

} else if (tm == "September" || tm == "september" || tm == "Sep" || tm == "sep") {
      console.log("\n30 days.\n")

} else if (tm == "October" || tm == "october" || tm == "Oct" || tm == "oct") {
      console.log("\n31 days.\n")

} else if (tm == "November" || tm == "november" || tm == "Nov" || tm == "nov") {
      console.log("\n30 days.\n")

} else if (tm == "December" || tm == "december" || tm == "Dec" || tm == "dec") {
      console.log("\n31 days.\n")

} else {
      console.log("\nInvalid.\n")
}

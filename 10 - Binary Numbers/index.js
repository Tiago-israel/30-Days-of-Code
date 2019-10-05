"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getBinary(value = 1) {
  let binaryStr = "";
  while (value > 0) {
    binaryStr += value % 2;
    value = parseInt(value / 2);
  }
  return binaryStr.split("").reverse();
}

function main() {
  const n = parseInt(readLine(), 10);
  const binary = getBinary(n);
  let count = 0;
  let countOnes = [];
  binary.forEach(x => {
    if (x == "1") {
      count++;
    } else {
      count = 0;
    }
    countOnes.push(count);
  });
  console.log(Math.max(...countOnes));
}

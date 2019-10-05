function processData(input) {
  //Enter your code here
  const words = input.split("\n");
  let count = words[0];
  for (let i = 1; i <= count; i++) {
    let word = words[i];
    let even = "",
      odd = "";
    word.split("").forEach((x, j) => {
      const iseven = j % 2 === 0;
      even += iseven ? x : "";
      odd += !iseven ? x : "";
    });
    console.log(`${even} ${odd}`);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});

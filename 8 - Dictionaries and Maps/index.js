function processData(input = '') {
    //Enter your code here
    const data = input.split('\n');
    const count = parseInt(data[0]);
    const usersPhones = data.filter((x,i) => i > 0 && i <= count);
    const names = data.filter((x,i) => i > count);

    const phoneBook = usersPhones.reduce((acc,x = '') => {
      const [name, phone] = x.split(" ");
      acc[name] = phone;
      return acc;
    },{});

    names.forEach(x => (phoneBook[x] ? 
        console.log(`${x}=${phoneBook[x]}`):
        console.log('Not found'))
    );

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

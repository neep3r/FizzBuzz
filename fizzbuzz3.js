const modulations = [
  [3,"Fizz"],
  [5,"Buzz"],
  [7,"Bizz"]
]

for (let i = 1; i <= 100; i++) {
  let output = '';

  for (let n = 0; n <= modulations.length - 1; n++) {
    if (i % modulations[n][0] == 0) {
      output += modulations[n][1];
    }
  }
  
  if (output == '') {console.log(i);}
  else {console.log(output);}

}

for (let i = 1; i <= 100; i++) {
  let output = '';
  function onModulate(i,num,tex) {
    if (i % num == 0) {output += tex;}
  }
  onModulate(i,3,"Fizz")
  onModulate(i,5,"Buzz")
  
  if (output == '') {console.log(i);}
  else {console.log(output);}

}

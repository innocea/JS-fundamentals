
const size = parseInt(process.argv[2]);


if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  let i = 0; 

 
  while (i < size) {
    let row = ''; 
    let j = 0; 

   
    while (j < size) {
      row = row + 'X'; 
      j = j + 1;
    }

    console.log(row); 
    i = i + 1;
  }
}

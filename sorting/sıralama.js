function sorting() {
    let array1 = [];
    let prompt1;
  
    do {
      prompt1 = prompt("Please enter your values. When you're done, please insert an empty value.");
      if (prompt1 !== null && prompt1.trim() !== "") {
        array1.push(parseFloat(prompt1));   //parseFloat olmadan çalışmıyor
      }
    } while (prompt1 !== "");
  
    for (let i = 0; i < array1.length; i++) {
      for (let j = i + 1; j < array1.length; j++) {
        if (array1[i] < array1[j]) {
          
          let sorted = array1[i];
          array1[i] = array1[j];
          array1[j] = sorted;
        }
      }
    }
  
    console.log(array1)
  }
  
  sorting();
  
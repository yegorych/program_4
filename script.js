"use scrict";

const binaryArrayToNumber = arr => {
    let temp = '';
    let res = '';
    for(let i = 0; i < arr.length; i++){
      temp = temp + arr[i];
      res = parseInt(temp,2);
    }
    return res;
  };
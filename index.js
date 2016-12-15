function isValidNumber(a){
  if(parseInt(a,10) != 'NaN'){
    return true;
  }
  return false;
}

function add(a, b){
    if (isValidNumber(a) & isValidNumber(b)) {
      return a + b;  
    }
}

function subtract(a, b){
  if (isValidNumber(a) & isValidNumber(b)) {
    return a - b;  
  }
}

function multiply(a, b){
  if (isValidNumber(a) & isValidNumber(b)) {
    return a * b;  
  }
}

function divide(a, b){
  if (isValidNumber(a) & isValidNumber(b)) {
    return a / b;  
  }
}

function inc(a){
    if (isValidNumber(a)) {
      return a + 1;  
    }
}

function dec(a){
    if (isValidNumber(a)) {
      return a - 1;  
    }
}

function makeInt(n){
  if(isValidNumber(n)){
    return n;
  }else{
    return 'NaN';
  }
}

function preserveDecimal(n){
  if(parseFloat(n)){
    return n;
  }else{
    return 'NaN';
  }
}

module.exports = function check(str, bracketsConfig) {
  let stack = [];

  bracketsConfig = bracketsConfig.flat();
  let bracketsObjectConfig = {};
  let openBrackets = [];
  let k = 0;

  for (let i = 0; i < bracketsConfig.length - 1; i++) {
    if (i % 2 === 1) continue;
    else bracketsObjectConfig[bracketsConfig[i+1]] = bracketsConfig[i];
  }


  openBrackets = bracketsConfig.filter((element, index) => index % 2 === 0);
  
  for (let i = 0; i < str.length; i++) {
      if (Object.keys(bracketsObjectConfig).includes(str[i]) && Object.values(bracketsObjectConfig).includes(str[i]) && k === 0) {
        k++;
        stack.push(str[i]);
        continue;
    }
    else if (openBrackets.includes(str[i]) && !(Object.keys(bracketsObjectConfig).includes(str[i]))) {
        stack.push(str[i]);
      } else {
        if (stack.length === 0) {return false;
        }
    }

    let topElement = stack[stack.length - 1];
    
    if (bracketsObjectConfig[str[i]] === topElement && Object.keys(bracketsObjectConfig).includes(str[i]) && Object.values(bracketsObjectConfig).includes(str[i]) && k === 1) {
      stack.pop();
      k = 0;
        continue;
    }
    else if (bracketsObjectConfig[str[i]] === topElement) {
      stack.pop();
    }
  }

  return stack.length === 0;
}

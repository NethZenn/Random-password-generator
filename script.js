const result = document.getElementById("result");
const submit = document.getElementById("submit");
const passwordLengthInput = document.getElementById("passwordLength");
const lowercaseCheckbox = document.getElementById("includeLowercase");
const uppercaseCheckbox = document.getElementById("includeUppercase");
const numberCheckbox = document.getElementById("includeNumbers");
const symbolCheckbox = document.getElementById("includeSymbols");

submit.onclick = function(){

  let passwordLength = passwordLengthInput.value;
  let lowercaseInclude = lowercaseCheckbox.checked;
  let uppercaseInclude = uppercaseCheckbox.checked;
  let numberInclude = numberCheckbox.checked;
  let symbolInclude = symbolCheckbox.checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "1234567890";
  const symbolChars = "!@#$%^&*()_+=-";

  let allowedChars = "";
  let password = "";

  if(lowercaseInclude === true){
    allowedChars += lowercaseChars;
  }
  else{
    allowedChars += "";
  }
  
  if(uppercaseInclude === true){
    allowedChars += uppercaseChars;
  }
  else{
    allowedChars += "";
  }
  if(numberInclude === true){
    allowedChars += numberChars;
  }
  else{
    allowedChars += "";
  }
  if(symbolInclude === true){
    allowedChars += symbolChars;
  }
  else{
    allowedChars += "";
  }

  if(passwordLength <= 0){
    result.textContent = "You need to enter a value";
  }
  if(allowedChars === 0){
    result.textContent = "You need to select at least one option";
  }

  for(let i = 0; i < passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password = password + allowedChars[randomIndex];
  }

  result.textContent = password;

  console.log(passwordLength);
  console.log(lowercaseInclude);
  console.log(uppercaseInclude);
  console.log(numberInclude);
  console.log(symbolInclude);

  return password;
}
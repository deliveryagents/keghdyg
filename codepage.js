const form = document.getElementById('form');
const password = document.getElementById('password');



form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();

  if(isFormValid()==true){
      form.submit();
  } else {
      event.preventDefault();
  }
});



function isFormValid(){
  const inputContainers = form.querySelectorAll('.input-control');
  let result = true;
  inputContainers.forEach((container)=>{
      if(container.classList.contains('error')){
          result = false;
      }
  });

  return result;
}



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};



const validateInputs = () => {
  const passwordValue = password.value.trim();



if(passwordValue.length > 6 ) {
    setError(password, 'enter 6-digit code');
} else if (passwordValue.length <  6 ) {
    setError(password, 'enter the correct code.');
    
} else  {
    setSuccess(password);
}
};

var timer = 30;
var myTimer = setInterval(function(){
  document.getElementById('btn').innerHTML = "enter code in "+timer--+" secs...";
  if(timer == -1){
    clearInterval(myTimer);
    document.getElementById('button').innerHTML = "Didn't get a code?";
  }
}, 1000);


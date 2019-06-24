let checkmark = document.getElementsByClassName('complete');

function alpha(data) {
  let nameLetters = /^[a-zA-Z]+$/;
  if (nameLetters.test(data)) {
    return true;
  }
  return false;
}

function validateEmail(data) {
  let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (testData.test(data)) {
    //alert("test data");
    return true;
  }
  return (false)
}

function disableButton() {
  document.getElementById('submit').disabled = true;
}

function enableButton() {
  document.getElementById('submit').disabled = false;
}
document.getElementById('name').onblur = function() {
  let status = document.getElementById('name').value;
  if (status.length > 20) {
    document.getElementById('alert-name').innerHTML = 'Name field has too many characters, please limit to 20';
    document.getElementById('name').focus();
    checkmark[0].classList.remove('active');
    disableButton();
  } else if (!alpha(status)) {
    document.getElementById('alert-name').innerHTML = 'Invalid characters!';
    document.getElementById('name').focus();
    checkmark[0].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-name').innerHTML = '';
    checkmark[0].classList.add('active');
    enableButton();
  }
};
document.getElementById('email').onblur = function() {
  let status = document.getElementById('email').value;
  if (status.length < 0) {
    document.getElementById('alert-email').innerHTML = 'Email field is empty';
    document.getElementById('email').focus();
    checkmark[1].classList.remove('active');
    disableButton();
  }
  if (status.length > 50) {
    document.getElementById('alert-email').innerHTML = 'Too many characters please limit to 50';
    document.getElementById('email').focus();
    checkmark[1].classList.remove('active');
    disableButton();
  } else if (!validateEmail(status)) {
    document.getElementById('alert-email').innerHTML = 'Invalid email address!';
    document.getElementById('email').focus();
    checkmark[1].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-email').innerHTML = '';
    checkmark[1].classList.add('active');
    enableButton();
  }
};
document.getElementById('password').onblur = function() {
  let status = document.getElementById('password').value;
  if (status.length < 8) {
    document.getElementById('alert-password').innerHTML = 'Password field is empty or less than 8 characters';
    document.getElementById('password').focus();
    checkmark[2].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-password').innerHTML = '';
    checkmark[2].classList.add('active');
    enableButton();
  }
};
document.getElementById('password-confirm').onblur = function() {
  let status = document.getElementById('password').value;
  let confirm = document.getElementById('password-confirm').value;
  if (status != confirm) {
    document.getElementById('alert-confirm-password').innerHTML = "Passwords don't match";
    document.getElementById('password-confirm').focus();
    checkmark[3].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-confirm-password').innerHTML = '';
    checkmark[3].classList.add('active');
    enableButton();
  }
};
document.getElementById("submit").onclick = function() {
  var elems = document.getElementById("regForm").getElementsByTagName("input");
  for (var i = 0; i < elems.length; i++) {

    elems[i].setAttribute("value", elems[i].value);
  }
  alert(document.getElementById("regForm").innerHTML);
};
const userInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

userInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

userInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
userInput.onkeyup = function() {

  const lowerCaseLetters = /[a-z]/g;
  if (userInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  const upperCaseLetters = /[A-Z]/g;
  if (userInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  const numbers = /[0-9]/g;
  if (userInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (userInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

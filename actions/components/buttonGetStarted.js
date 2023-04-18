/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */

function validationEmail() {
  const emailReceived = document.getElementById('email-text');
  const email = emailReceived.value;

  const regex = /\S+@\S+\.\S+/;
  const testEmail = regex.test(email);
  const isOk = '';
  const isRequired = 'Email is required';

  if (!testEmail || email.length === 0) {
    document.getElementById('element').innerHTML = isRequired;
  } else {
    document.getElementById('element').innerHTML = isOk;
  }
}

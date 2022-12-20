const sendBtn = document.getElementById('sendButton');
const form = document.getElementById('sendForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const formInfo = document.getElementById('form__info');
const formPopupTxt = document.getElementById('form__popup-txt');

form.addEventListener('submit', sendEmail);

async function sendEmail(e) {
  e.preventDefault();
  sendBtn.value = 'Sending...';

  const serviceID = 'service_2tr2x4p';
  const templateID = 'template_k81pvtl';

  try {
    await emailjs.sendForm(serviceID, templateID, this);
    sendBtn.value = 'Send';
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    formInfo.style.backgroundColor = 'rgb(0 113 12)';
    formPopupTxt.textContent = 'Email was successfully sent!';
    formInfo.classList.toggle('hide');
  } catch (err) {
    sendBtn.value = 'Send';
    formInfo.style.backgroundColor = '#8b1a09';
    formPopupTxt.textContent = 'Error sending email! Try again!';
    formInfo.classList.toggle('hide');
  }
}

export { sendEmail };

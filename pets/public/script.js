console.log('Frontend JS is working!');

document.addEventListener('DOMContentLoaded', () => {

  const submitFormBtn = document.querySelector('.submit-btn');
  console.log('submitFormBtns', submitFormBtn);
  const inputField = document.querySelector('.pet-name');
  const hiddenField = document.querySelector('.pet-id');
  const petIdValue = hiddenField.value;
  console.log('petId', petIdValue);

  submitFormBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const changedName = inputField.value;
    console.log('changedName', changedName);
    const newName = changedName;
    const petId = petIdValue;
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ petId, newName }),
    })
      .then(response => response.json())
      .then((message) => {
        console.log('message.success', message);
        if (message) {
          document.querySelector('.messageField').innerHTML = 'Success!'
        } else {
          document.querySelector('.messageField').innerHTML = 'Failure!';
        }
      })
  })
})

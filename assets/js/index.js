const countdownItems = document.querySelectorAll('.about__countdown-item');
const formatNumber = (num) => String(num).padStart(2, '0');

function startCountdown() {
  if (countdownItems.length === 0) {
    console.error('Countdown items not found in the DOM.');
    return;
  }

  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59);

  const interval = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(interval);
      countdownItems.forEach((item) => {
        const numberElement = item.querySelector('.about__countdown-number');
        if (numberElement) {
          numberElement.textContent = '00';
        }
      });
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownItems[0].querySelector('.about__countdown-number').textContent = formatNumber(days);
    countdownItems[1].querySelector('.about__countdown-number').textContent = formatNumber(hours);
    countdownItems[2].querySelector('.about__countdown-number').textContent = formatNumber(minutes);
    countdownItems[3].querySelector('.about__countdown-number').textContent = formatNumber(seconds);
  }, 1000);
}

startCountdown();

function handleFormBookSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const formData = {
    fullname: form.querySelector('#name')?.value || '',
    email: form.querySelector('#email')?.value || '',
    numberTravelers: form.querySelector('.about__form-select')?.value || '',
    message: form.querySelector('#message')?.value || '',
  };

  const resultDiv = document.querySelector('.form-book-result');
  if (resultDiv) {
    resultDiv.textContent = JSON.stringify(formData, null, 2);
    resultDiv.style.whiteSpace = 'pre';
    resultDiv.style.marginTop = '20px';
    resultDiv.style.padding = '20px';
    resultDiv.style.border = '1px solid #ddd';
    resultDiv.style.borderRadius = '5px';
  }
}

function handleFormContactSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const contactData = {
    name: form.querySelector('#name')?.value || '',
    email: form.querySelector('#email')?.value || '',
    message: form.querySelector('#message')?.value || '',
  };

  const resultDiv = document.querySelector('.form-contact-result');
  if (resultDiv) {
    resultDiv.textContent = JSON.stringify(contactData, null, 2);
    resultDiv.style.whiteSpace = 'pre';
    resultDiv.style.marginTop = '20px';
    resultDiv.style.padding = '20px';
    resultDiv.style.border = '1px solid #ddd';
    resultDiv.style.borderRadius = '5px';
  }
}

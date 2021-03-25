const sendFooterForm = () => {
  const footerForm = document.querySelector('#footer_form');
  const modalThanks = document.querySelector('#thanks');
  const errorMesssage = document.createElement('p');
  errorMesssage.textContent = 'Что-то пошло не так...';
  errorMesssage.style.cssText = 'display: flex; color: red; position: absolute; bottom: 10px; right: 0;';


  const successfulExecution = (target) => {
    footerForm.elements[0].checked = false;
    footerForm.elements[1].checked = false;
    footerForm.elements[2].blur();
    footerForm.elements[2].value = '';
    modalThanks.classList.add('active');
    modalThanks.addEventListener('click', event => {
      const target = event.target;
      if ((target.matches('img.close_icon') || 
      target.matches('.overlay') || 
      target.matches('.close-btn')) && 
    modalThanks.classList.contains('active')) {
      modalThanks.classList.remove('active');
    }})
  }

  footerForm.addEventListener('submit', event => {
    const target = event.target;
    event.preventDefault();
    const formElements = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
    const formData = new FormData(target);
    let body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });


    if ((formElements[0].checked || formElements[1].checked) && formElements[2].value.trim() !== '') {
      postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200')
        }
        successfulExecution(target);
      })
      .catch(error => {
        console.error(error);
        footerForm.appendChild(errorMesssage);
      })
    } else {
      event.preventDefault();
      alert('Выберите один из клубов и введите корректный номер телефона');
    }
  })

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
}

export default sendFooterForm;
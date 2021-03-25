const sendBodyForms = () => {
  const modalThanks = document.querySelector('#thanks');
  const errorMesssage = document.createElement('p');
  errorMesssage.textContent = 'Что-то пошло не так...';
  errorMesssage.style.cssText = 'display: flex; color: red; position: absolute; bottom: 10px; left: 0;';


  const successfulExecution = (target) => {
    target.reset();
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


  document.addEventListener('submit', event => {
    const target = event.target;
    event.preventDefault();

    if (target.matches('#card_order') && document.title === 'Сеть фитнес клубов Тело') {
      const formElements = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
      const formData = new FormData(target);
      let body = {};
      formData.forEach((value, key) => {
        body[key] = value;
      });

      if ((formElements[0].checked || 
        formElements[1].checked || 
        formElements[2].checked || 
        formElements[3].checked) && 
        (formElements[4].checked || 
        formElements[5].checked) &&
        (formElements[6].value.trim() !== '' && 
        formElements[8].value.trim() !== '' &&
        formElements[9].value.trim() !== '') &&
        formElements[10].checked
        ) {
          postData(body)
            .then(response => {
              if (response.status !== 200) {
                throw new Error('status network not 200')
              }
              successfulExecution(target);
            })
            .catch(error => {
              console.error(error);
              console.log(target);
              target.appendChild(errorMesssage);
            })
        } else {
          event.preventDefault();
          alert('Введите корректные данные во все поля формы и согласитесь на обработку персональных данных');
        }
    } else if (target.matches('#banner-form')) {
      const formElements = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
      const formData = new FormData(target);
      let body = {};
      formData.forEach((value, key) => {
        body[key] = value;
      });

      if (formElements[1].value.trim() !== '' && 
      formElements[2].value.trim() !== '' && 
      formElements[3].checked) {
        postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200')
          }
          successfulExecution(target);
        })
        .catch(error => {
          console.error(error);
          console.log(target);
          target.appendChild(errorMesssage);
        })
      } else {
        event.preventDefault();
        alert('Введите корректные данные во все поля формы и согласитесь на обработку персональных данных');
      }
    } else if (target.matches('#card_order') && 
    (document.title === 'Сеть фитнес клубов Тело - Мозаика' || 
    document.title === 'Сеть фитнес клубов Тело - Щелково')) {
      const formElements = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
      const formData = new FormData(target);
      let body = {};
      formData.forEach((value, key) => {
        body[key] = value;
      });

      if ((formElements[0].checked || 
        formElements[1].checked || 
        formElements[2].checked || 
        formElements[3].checked) && 
        formElements[5].value.trim() !== '' &&
        formElements[6].value.trim() !== '' &&
        formElements[7].checked
        ) {
          postData(body)
            .then(response => {
              if (response.status !== 200) {
                throw new Error('status network not 200')
              }
              successfulExecution(target);
            })
            .catch(error => {
              console.error(error);
              console.log(target);
              target.appendChild(errorMesssage);
            })
    }

  }})


  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body : JSON.stringify(body)
    });
  }
}

export default sendBodyForms;
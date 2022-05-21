const DATE_KEY = 'lastVisitDate';

const now = new Date();
let saved = localStorage.getItem(DATE_KEY);

const showModal = () => {
  console.log('showing modal...')

  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'motivator-container')
  mainContainer.setAttribute('class', 'container mt-3');
  mainContainer.setAttribute('style', 'width:100vw;z-index: 9999999;'
      + 'background-color:rgb(0,0,0, 0.5);margin:0;position:absolute;');

  let title = document.createElement('h1');
  title.setAttribute('class', 'text-center');
  title.innerText = 'Welcome back!';

  let text = document.createElement('p');
  text.setAttribute('class', 'text-center');
  text.innerText = 'Keep going on, you are doing great!';

  let btnContainer = document.createElement('div');
  btnContainer.setAttribute('class', 'container');

  let row = document.createElement('div');
  row.setAttribute('class', 'row');

  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'col text-center');

  let okBtn = document.createElement('button');
  okBtn.setAttribute('class', 'btn btn-default')
  okBtn.innerText = 'OK';
  okBtn.addEventListener('click', () => {
    document.body.removeChild(mainContainer);
  });
  btnContainer.appendChild(row);
  row.appendChild(wrapper);
  wrapper.appendChild(okBtn);

  mainContainer.appendChild(title);
  mainContainer.appendChild(text);
  mainContainer.appendChild(btnContainer);

  document.body.appendChild(mainContainer)
}

showModal();

// if (saved) {
//   let lastVisitDate = new Date(saved);
//   if (lastVisitDate.getDate() < now.getDate()) {
//     showModal();
//   } else {
//     console.log('modal already was shown');
//   }
// } else {
//   showModal();
// }
//
// localStorage.setItem(DATE_KEY, now);
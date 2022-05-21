const DATE_KEY = 'lastVisitDate';

const now = new Date();
let saved = localStorage.getItem(DATE_KEY);

const showModal = () => {
  // TODO: show modal
  console.log('showing modal...')
}

if (saved) {
  let lastVisitDate = new Date(saved);
  if (lastVisitDate.getDate() < now.getDate()) {
    showModal();
  } else {
    console.log('modal already was shown');
  }
} else {
  showModal();
}

localStorage.setItem(DATE_KEY, now);
import 'flexboxgrid';
import './styles/styles.scss';

const list = document.querySelector('.navigation__list');
const menu = document.querySelector('.burgermenu');
const body = document.querySelector('body');

menu.addEventListener('click', function() {
  list.classList.toggle('isactive');
  body.classList.toggle('hidden');
});

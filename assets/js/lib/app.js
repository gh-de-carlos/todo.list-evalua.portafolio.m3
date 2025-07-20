import friendlyDateFormatter from "./friendlyDateFormatter.js";

const dashboard = document.querySelector('#dashboard');
const template = document.querySelector('#task-template');
const dottedBtn = document.querySelectorAll('.fa-solid, .fa-regular')
dashboard.addEventListener('contextmenu', showMenu);
dottedBtn.forEach(d => d.addEventListener('click', showMenu));

function render(tasks) {
  // crear lógica de resiliencia
  // recorremos y creamos cards.
  console.table(tasks);
  tasks.forEach(task => {
    console.log(typeof task.creationDate)
    const clone = template.content.cloneNode(true);
    clone.querySelector('.task-card').id = task.id;
    clone.querySelector('.card-body').textContent = task.task;
    clone.querySelector('.card-footer').textContent = '...' + friendlyDateFormatter(task.creationDate);
    clone.querySelector('.task-card').classList.add(selectBg(task.color));
    tiltCard(clone.querySelector('.task-card'));

    dashboard.appendChild(clone);
  });
}


function showMenu(e) {
  console.log(e);
  const card = e.target.closest('.task-card');

  if (card) {
    e.preventDefault();
    showOptionsMenu({
      x: e.clientX,
      y: e.clientY,
      cardId: card.dataset.id,
    });
  } 
}

function showOptionsMenu({ x, y, cardId }) {
  const menu = document.querySelector('#custom-menu');
  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.display = 'block';
  menu.dataset.cardId = cardId;
}

document.addEventListener('click', () => {
  document.querySelector('#custom-menu').style.display = 'none';
});

let debounce;
const customMenu = document.querySelector('#custom-menu');
customMenu.addEventListener('mouseleave', (e) => {
  clearTimeout(debounce);
  const el = e.currentTarget;
  debounce = setTimeout(() => {
    el.style.display = 'none';
  }, 500)
})

customMenu.addEventListener('mouseenter', (e) => {
  if (debounce) clearTimeout(debounce);
})


// tiltear las tarjetitas
// const cards = document.querySelectorAll('.task-card');
// cards.forEach(card => {
function tiltCard(card) {
  let absTiltDeg = 0;
  // cambiando estos valores, probabilidad tilteo y
  // rango del angulo de tilteo puedo ofrecer configuraciones
  // de "modo": ¿serio, tranquilo, relajado, loco? 
  const isTilt = Math.random() > 0.2 ? true : false;
  if (isTilt) absTiltDeg = Math.floor(Math.random() * 10-5+1)+3;
  let tiltDeg = Math.round(Math.random()) === 0 ? absTiltDeg * -1 : absTiltDeg;
  console.log(tiltDeg);
  card.style.transform = `rotate(${tiltDeg}deg)`;
}

// editar en el contenido mismo.
const tasks = document.querySelectorAll('.card-body');
tasks.forEach(task => task.addEventListener('dblclick', editMode));

function editMode(e) {
  e.currentTarget.contentEditable = 'true'; 
}

function selectBg(hexColor) {
  if (hexColor === '#FAF3DD') return 'task-card--honey';
  if (hexColor === '#DCE3C5') return 'task-card--sage';
  if (hexColor === '#C3E8BD') return 'task-card--honeydew';
  if (hexColor === '#B7D6E8') return 'task-card--sky';
  if (hexColor === '#EAD7C3') return 'task-card--peach';
  if (hexColor === '#F8C8DC') return 'task-card--rose';

  return 'task-card--yellow'

}

export default { render }
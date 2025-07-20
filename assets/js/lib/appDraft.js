const dashboard = document.querySelector('.dashboard');
const dottedBtn = document.querySelectorAll('.fa-solid, .fa-regular')
dashboard.addEventListener('contextmenu', showMenu);
dottedBtn.forEach(d => d.addEventListener('click', showMenu));

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
const cards = document.querySelectorAll('.task-card');
cards.forEach(card => {
  let absTiltDeg;
  // cambiando estos valores, probabilidad tilteo y
  // rango del angulo de tilteo puedo ofrecer configuraciones
  // de "modo": ¿serio, tranquilo, relajado, loco? 
  const isTilt = Math.random() > 0.2 ? true : false;
  if (isTilt) absTiltDeg = Math.floor(Math.random() * 10-5+1)+3;
  let tiltDeg = Math.round(Math.random()) === 0 ? absTiltDeg * -1 : absTiltDeg;
  console.log(tiltDeg);
  card.style.transform = `rotate(${tiltDeg}deg)`;
})

// editar en el contenido mismo.
const tasks = document.querySelectorAll('.card-body');
tasks.forEach(task => task.addEventListener('dblclick', editMode));

function editMode(e) {
  e.currentTarget.contentEditable = 'true'; 
}
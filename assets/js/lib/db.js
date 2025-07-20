export const importedTasks = (() => {
  const palette = ['#FAF3DD', '#DCE3C5', '#C3E8BD', '#B7D6E8', '#EAD7C3', '#F8C8DC']; // Creamy memo hues
  const hourAgo     = new Date(Date.now() - 1000 * 60 * 60);
  const yesterday   = new Date(Date.now() - 1000 * 60 * 60 * 24);
  const twoWeeksAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14);
  const old         = new Date(Date.now() - 1000 * 60 * 60 * 24 * 45);

  const ranges = [new Date(), hourAgo, yesterday, twoWeeksAgo, old];
  const randomRange = () => ranges[Math.floor(Math.random() * ranges.length)];

  const tareas = [
    'Comprar leche',
    'Responder emails pendientes',
    'Organizar escritorio',
    'Sacar la basura',
    'Actualizar currículum',
    'Llamar al médico',
    'Planear menú semanal',
    'Hacer copia de seguridad',
    'Pagar cuentas',
    'Leer capítulo del libro'
  ];

  return tareas.map((task, i) => ({
    task,
    creationDate: i < 5 ? ranges[i] : randomRange(),
    color: palette[i % palette.length],
    id: self.crypto.randomUUID(),
    done: false,
    important: Math.random() > 0.5
  }));
})();
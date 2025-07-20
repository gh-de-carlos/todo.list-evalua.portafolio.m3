/**
 * Una función simple que formatea fechas comparándolas con
 * ahora y retorna distintas strings según la cantidad de
 * tiempo transcurrido. Está preparada para trabajar desde
 * minutos, pero por ahora retorna mensajes para menos de 
 * 1 hora, hoy, ayer, entre 2 y 30 días, y más de 30 días.
 * @param {object} date - Un objeto de tipo Date para comparar. 
 * @returns {string} - Un mensaje de tiempo relativo transcurrido.
 */
function friendlyDateFormatter(date) {
  if (!(date instanceof Date)) date = new Date(date);

  const now = new Date();
  const diffMs = now - date;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const dateDay = new Date(date);
  const nowDay = new Date(now);
  const yesterdayDay = new Date(now);
  nowDay.setHours(0, 0, 0, 0);
  dateDay.setHours(0, 0, 0, 0);
  yesterdayDay.setDate(yesterdayDay.getDate() - 1);
  yesterdayDay.setHours(0, 0, 0, 0);

  if (diffMinutes < 60) return "recién";                            // menos de 1 hora
  if (dateDay.getTime() === nowDay.getTime()) return "hoy";         // hoy calendario
  if (dateDay.getTime() === yesterdayDay.getTime()) return "ayer";  // ayer, calendario
  if (diffDays <= 30) return `hace ${diffDays} días`;               // 2-30 días
  // si pasan más de 30 días.
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `el ${day}-${month}-${year}`;
}

export default friendlyDateFormatter;
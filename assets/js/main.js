import app from './lib/app.js';
import tasksService from './lib/tasksService.js';


app.render(tasksService.init());
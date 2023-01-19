import './style.css';
import { setupGlobe } from './globe';

const app = document.querySelector<HTMLDivElement>('#app');

const title = document.createElement('h4');
title.innerText = 'Simplicity Fuels Creativity';

const canvas = document.createElement('canvas');
canvas.classList.add('globe');
canvas.setAttribute('width', '1024');
canvas.setAttribute('height', '500');

if (app) {
  app.appendChild(title);
  app.appendChild(canvas);
  setupGlobe(canvas);
}

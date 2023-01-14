import './style.css';
import { setupGlobe } from './globe';

const app = document.querySelector<HTMLDivElement>('#app');

const title = document.createElement('h1');
title.innerText = 'Vanilla Cobe Draggable and Rotate';

const canvas = document.createElement('canvas');
canvas.classList.add('globe');
canvas.setAttribute('width', '1000');
canvas.setAttribute('height', '1000');

if (app) {
  app.appendChild(title);
  app.appendChild(canvas);
  setupGlobe(canvas);
}
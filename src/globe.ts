import createGlobe from 'cobe';

export function setupGlobe(canvas: HTMLCanvasElement) {
  let pointerInteracting: number | null = null;
  let pointerInteractionMovement = 0;
  let phi = 0;

  createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    markers: [
      // longitude latitude
      { location: [37.7595, -122.4367], size: 0.03 },
      { location: [40.7128, -74.006], size: 0.1 },
    ],
    onRender: (state) => {
      // This prevents rotation while dragging
      if (!pointerInteracting) {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        phi += 0.005;
      }
      state.phi = phi + pointerInteractionMovement / 200;
    },
  });

  canvas.style.opacity = '1';

  canvas.onpointerdown = (e) => {
    pointerInteracting = e.clientX - pointerInteractionMovement;
    canvas.style.cursor = 'grabbing';
  };

  canvas.onpointerup = () => {
    pointerInteracting = null;
    canvas.style.cursor = 'grab';
  };

  canvas.onpointerout = () => {
    pointerInteracting = null;
    canvas.style.cursor = 'grab';
  };

  canvas.onmousemove = (e) => {
    if (pointerInteracting !== null) {
      const delta = e.clientX - pointerInteracting;
      pointerInteractionMovement = delta;
    }
  };

  canvas.ontouchmove = (e) => {
    if (pointerInteracting !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting;
      pointerInteractionMovement = delta;
    }
  };
}

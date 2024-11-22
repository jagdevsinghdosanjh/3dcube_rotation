document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let isRotating = true;
  
    cube.addEventListener('click', () => {
      if (isRotating) {
        cube.style.animationPlayState = 'paused';
      } else {
        cube.style.animationPlayState = 'running';
      }
      isRotating = !isRotating;
    });
  });
  
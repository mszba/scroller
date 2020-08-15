document.addEventListener('DOMContentLoaded', () => {

  const rootElement = document.querySelector('#root');
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;
  let isBlocked = false;

  document.addEventListener('wheel', (e) => {
    if (isBlocked) return;
    isBlocked = true;

    setTimeout(function () {
      isBlocked = false;
    }, 500)

    const direction = e.deltaY > 0 ? 1 : -1;
    // console.log(e.deltaY);
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }

    currentSectionIndex = currentSectionIndex + direction
    // console.log(currentSectionIndex);

    sections[currentSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
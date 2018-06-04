let ScrollAnimationModule = (() => {
  const elems = document.getElementsByClassName('hidden');
  const windowHeight = window.innerHeight;

  window.addEventListener('scroll', () => {
    for(let i = 0; i < elems.length; i++) {
      const posFromTop = elems[i].getBoundingClientRect().top;
      if(posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden', 'visible');
      }
    }
  });
})();

export default ScrollAnimationModule;
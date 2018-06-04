let CountUpModule = ((id, start, end, duration) => {
  let init = () => {
    const obj = document.getElementById(id);
    const range = end - start;
    const minTimer = 50;
    const stepTime = Math.max(Math.abs(Math.floor(duration / range)), minTimer);

    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer;

    let run = () => {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
        clearInterval(timer);
      }
    }

    timer = setInterval(run, stepTime);
    run();
  };

  return {
    init: init,
  }
})();

export default CountUpModule;

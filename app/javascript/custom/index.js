function letsMath(launchDate) {
    const total = Date.parse(launchDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, launchDate) {
    const clock = document.getElementById(id);
    const daysSpan = clock.getElementById('dtime');
    const hoursSpan = clock.getElementById('htime');
    const minutesSpan = clock.getElementById('mtime');
    const secondsSpan = clock.getElementById('stime');
  
    function updateClock() {
      const t = letsMath(launchDate);
  
      daysSpan.innerHTML = ('0' + t.days).slice(-2);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
  initializeClock('countdown-clock', deadline);
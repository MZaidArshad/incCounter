const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const startingCount = +counter.innerHTML;
    const inc = targetCount / 100;
    if (startingCount < targetCount) {
      counter.innerHTML = Math.round(startingCount + inc);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter();
});

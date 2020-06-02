
const spinner = function() {
  const animationMoves = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|  ','\r/  ','\r-  ','\r\\  ','\r|  ','\n'];
  let timeOut = 100;
  for (const move of animationMoves) {
    setTimeout(() => {
      process.stdout.write(move);
    }, timeOut);
    timeOut += 200;

  }

};

spinner();






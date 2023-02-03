const rounder = (num) => {
  const roundedNum = num.toFixed(0);
  const rest = roundedNum % 5;
  if (rest === 0) {
    return roundedNum;
  } else if (rest >= 2.5) {
    return roundedNum - rest + 5;
  } else {
    return roundedNum - rest;
  }
};

console.log(rounder(37.48));
console.log(rounder(37.52));
console.log(rounder(30.005));
//Время выполнения задания 20 минут

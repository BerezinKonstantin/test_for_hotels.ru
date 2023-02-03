const numOfComputers = (num) => {
  const lastIndex = Number(num.toString().slice(-1));
  if (lastIndex === 0 || lastIndex >= 5) {
    return `${num} компьютеров`;
  } else if (lastIndex === 1) {
    return `${num} компьютер`;
  } else if (lastIndex >= 2 && lastIndex < 5) {
    return `${num} компьютера`;
  }
};

console.log(numOfComputers(0));
console.log(numOfComputers(121));
console.log(numOfComputers(3));

//Время выполнения задания 5 минут

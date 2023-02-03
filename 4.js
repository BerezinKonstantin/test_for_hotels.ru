const isPrime = (num) => {
  let count = 0;
  for (let i = 2; i <= num - 1; i++) {
    let divisior = num % i;
    if (divisior === 0) {
      count = count + 1;
    }
  }
  if (count === 0 && num >= 2) {
    console.log(num + " является простым числом");
    return true;
  } else {
    console.log(num + " не является простым числом");
    return false;
  }
};

console.log(isPrime(-5));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(6));

//Время выполнения задания 20 минут

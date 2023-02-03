let a1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let a2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1, 23, 8];

const findMatch = (arr1, arr2) => {
  const findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) !== index);
  const duplicates1 = findDuplicates(arr1);
  const duplicates2 = findDuplicates(arr2);
  let doubleMatch = [];
  duplicates1.forEach((el) => {
    if (!doubleMatch.includes(el)) {
      for (let i = 1; i <= duplicates2.length; i++) {
        if (duplicates2.includes(el)) {
          doubleMatch.push(el);
          return;
        } else return;
      }
    } else return;
  });
  return doubleMatch;
};

console.log(findMatch(a1, a2));
//Время выполнения задания 20 минут

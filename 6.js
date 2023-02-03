const detMultipleTable = (num) => {
  let rows = [];
  let row1 = ["  "];
  for (let i = 1; i <= num; i++) {
    row1.push(i.toString().padStart(2, " "));
  }
  rows.push(row1);
  for (let i = 1; i <= num; i++) {
    let row = [];
    row.push(i.toString().padStart(2, " "));
    for (let j = 1; j <= num; j++) {
      let res = String(j * i);
      if (res.length === 1) {
        res = res.padStart(2, " ");
      }
      row.push(res);
    }
    rows.push(row);
  }
  console.table(rows);
};
detMultipleTable(5);

//Время выполнения задания 15 минут

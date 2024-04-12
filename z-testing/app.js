const nums = [10, 30, 50, 70, 90];

const squares = nums.map((num) => {
  return num * num;
});

const over1000 = squares.filter((square) => {
  return square > 1000;
});

const finale = over1000.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(nums);
console.log(squares);
console.log(over1000);
console.log(finale);

console.log("-----------------------------");

const numbs = [10, 30, 50, 70, 90]
  .map((num) => {
    return num * num;
  })
  .filter((square) => {
    return square > 1000 ? true : false;
  })
  .reduce((acc, num) => {
    return acc + num;
  }, 0);

console.log(numbs);

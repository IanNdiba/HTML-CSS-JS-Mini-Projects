let totalVotes = 0;

const player1 = {
  name: "Rafael Nadal",
  vote: 0,
};

const player2 = {
  name: "Novak Djokovic",
  vote: 0,
};

const vote = (player) => {
  player.vote++;
  totalVotes++;
};

while (totalVotes < 10) {
  let choice = prompt(
    `Use 1 to vote for ${player1.name}, and 2 for ${player2.name}`
  );

  if (choice === "1") {
    vote(player1);
  } else if (choice === "2") {
    vote(player2);
  } else {
    console.log("Invalid input");
  }
}

console.log(player1);
console.log(player2);

const result =
  player1.vote > player2.vote
    ? `The winner is ${player1.name} with ${player1.vote} votes`
    : `The winner is ${player2.name} with ${player2.vote} votes`;

console.log(result);

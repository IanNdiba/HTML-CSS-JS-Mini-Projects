let mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbours: ["USA", "Guatemala", "Belize"],
};

console.log(mexico);

mexico.id = 25;
mexico.neighbours.push("Honduras");

console.log(mexico);

const mexico2 = new Map(mexico);
console.log(mexico2);

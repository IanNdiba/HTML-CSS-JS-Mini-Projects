const houseForSale = new Map();
houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", 2012);
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

console.log(houseForSale);
console.log("==============================================================");
houseForSale.delete("built");
console.log(houseForSale);
console.log("==============================================================");
houseForSale.get("owner").age = 30;
console.log(houseForSale.get("owner"));
console.log("==============================================================");

const maxOfferPrice = houseForSale.get("offers").reduce((acc, offer) => {
  return Math.max(acc, offer);
}, 0);
console.log(maxOfferPrice);
console.log("==============================================================");
houseForSale.set("sale price", 312000);
console.log(houseForSale);

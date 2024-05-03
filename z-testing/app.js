console.log("Program Started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello", error: null });
  }, 5000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
  .then((value) => {
    console.log(value);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise chain completed");
      }, 2000);
    });
  })
  .then((value) => {
    console.log(value);
  });

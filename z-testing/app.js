const fetchUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          user: "Monkey",
          admin: true,
        },
      });
    }, 3000);
  });
};

const login = (object) => {
  if (object.admin === true) {
    console.log("Successfully Logged In!");
  }
  return "Failed to login in. Please try again..";
};

console.log("Program Starting");

const dataFetch = async () => {
  const data = await fetchUser();
  login(data.data);
};

dataFetch();

console.log("Program Complete");

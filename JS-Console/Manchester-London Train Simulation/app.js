const journey = [
  {
    stop: "Manchester Piccadilly",
    min: 0,
  },
  {
    stop: "Stockport",
    min: 11,
  },
  {
    stop: "Wilmslow",
    min: 23,
  },
  {
    stop: "Crewe",
    min: 29,
  },
  {
    stop: "Stafford",
    min: 37,
  },
  {
    stop: "Uchfield Trent Valley",
    min: 50,
  },
  {
    stop: "Tamworth",
    min: 65,
  },
  {
    stop: "Rugby",
    min: 88,
  },
  {
    stop: "Northampton",
    min: 103,
  },
  {
    stop: "Milton Keynes Central",
    min: 103,
  },
  {
    stop: "Wtford Junction",
    min: 125,
  },
  {
    stop: "London Euston",
    min: 140,
  },
];

//Counter to run the simulation to 140 minutes
let counter = 0;

let run = setInterval(() => {
  //checking if the counter matches a station
  checkStations(counter);
  console.log(convertTime(counter));

  //incrementing the counter
  counter++;
  if (counter === 141) {
    clearInterval(run);
  }
}, 1000);

//Checking the stations based on time
function checkStations(time) {
  journey.forEach((station) => {
    if (time == station.min) {
      console.log(`Stopping at ${station.stop}`);
    }
  });
}

const convertTime = (time) => {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;

  //checking against the departure time
  const departHour = 14;
  const departMin = 0;

  //new time using counter
  const newTime = `${departHour + hours}h ${addZero(departMin + minutes)}min`;
  return newTime;
};

//checking if time has zero eg (14:9) instead of 14:09
const addZero = (min) => {
  if (min < 10) {
    return "0" + min;
  } else {
    return min;
  }
};

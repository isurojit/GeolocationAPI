const currentSucess = (pos) => {
  //   const cordinates = pos.coords;
  const { latitude, longitude, accuracy } = pos.coords;
  console.log(latitude, longitude, accuracy);
};

const currentError = (err) => {
  console.log(err);
};

const options = {};

navigator.geolocation.getCurrentPosition(currentSucess, currentError, options);

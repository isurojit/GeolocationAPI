//GET Current Position
/*const currentSucess = (pos) => {
  //   const cordinates = pos.coords;
  const { latitude, longitude, accuracy } = pos.coords;
  console.log("LATITUDE:", latitude);
  console.log("LONGITUDE:", longitude);
  console.log("ACCURACY WITHIN RAGE OF:", accuracy / 1000, "KM");
};

const currentError = (err) => {
  console.log(err);
};

const currentOptions = {
  enableHighAccuracy: true, //Use GPS if Available
  timeout: 10000, //Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

// navigator.geolocation.getCurrentPosition(
//   currentSucess,
//   currentError,
//   currentOptions
// );

//Watch Current Position
const target = {
  latitude: 41.351245,
  longitude: -71.332365,
};
const watchSucess = (pos) => {
  const cordinates = pos.coords;
  if (
    target.latitude === cordinates.latitude &&
    target.longitude === cordinates.longitude
  ) {
    console.log("arrived in destination");
    navigator.geolocation.clearWatch(id);
  }
  console.log(cordinates);
};

const watchError = (err) => {
  console.log(err);
};

const watchOptions = {
  enableHighAccuracy: true, //Use GPS if Available
  timeout: 2000, //Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSucess,
  watchError,
  watchOptions
);*/
const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 50);

  marker.bindPopup("<strong>Your Current Location</strong>");
});

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
//   .openPopup();

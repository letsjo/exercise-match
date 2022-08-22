export const CurrentLocation = async () => {
  if (navigator.geolocation) {
    const position = await getPos();
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
  } else {
    return {
      lat: 37.566353,
      lon: 126.977953,
    };
  }

};

const getPos = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export default CurrentLocation;

import { useEffect, useState } from "react";
import { CurrentLocation } from "./utils/CurrentLocation";
import SlidBanner from "./components/SlideBanner";

function App() {
  const [nowPosition, setNowPosition] = useState({});

  useEffect(() => {
    CurrentLocation(setNowPosition);
  }, []);

  console.log(nowPosition);

  return (
    <div>
      <SlidBanner show={1} page={1}/>
    </div>
  );
}

export default App;

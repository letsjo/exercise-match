import { useEffect, useState } from "react";
import { CurrentLocation } from "./utils/CurrentLocation";
import SlidBanner from "./components/SlideBanner";
import Popover from "./components/Popover";

function App() {
  const [nowPosition, setNowPosition] = useState({});

  useEffect(() => {
    CurrentLocation(setNowPosition);
  }, []);

  console.log(nowPosition);

  return (
    <div>
      
    </div>
  );
}

export default App;

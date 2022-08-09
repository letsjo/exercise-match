import styled from "styled-components";
import LocalSelect from "./components/LocalSelect";
import NavBar from "./components/NavBar";
import SlidBanner from "./components/SlideBanner";
import Sweetalert from "./components/Sweetalert";
import { CurrentLocation } from "./utils/CurrentLocation";

function App() {
  return (
    <div>
      <CurrentLocation/>
    </div>
  );
}

export default App;

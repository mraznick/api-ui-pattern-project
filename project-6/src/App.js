import Synopsis from "./Synopsis.jsx";
import SeriesInfo from "./SeriesInfo.jsx";
import Episodes from "./Episodes.jsx";
import Gallery from "./Gallery.jsx";
import Tabs from "./Tabs"
import { Link, Routes, Route } from "react-router-dom";
import Styles from "./App.css";

function App() {

  return (

    <div id="parent-container">

      <nav>
<Tabs />
      </nav>

      <div data-tab-content id="synopsis">
        <Synopsis />
      </div>

      <div data-tab-content id="series-info">
        <SeriesInfo />
      </div>

      <div data-tab-content id="episodes">
        <Episodes />
      </div>

      <div data-tab-content id="gallery">
        <Gallery />
      </div>

    </div>
  );
}

export default App;

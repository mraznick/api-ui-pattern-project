import Synopsis from "./Synopsis.jsx";
import SeriesInfo from "./SeriesInfo.jsx";
import Episodes from "./Episodes.jsx";
import Gallery from "./Gallery.jsx";

function App() {
  return (
    <div>
      <div id="synopsis">
        <Synopsis />
      </div>
      <br></br>
      <br></br>
      <div id="series-info">
        <SeriesInfo />
      </div>
      <br></br>
      <br></br>
      <div id="episodes">
        <Episodes />
      </div>
      <br></br>
      <br></br>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;

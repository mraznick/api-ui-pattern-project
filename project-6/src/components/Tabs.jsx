import Synopsis from "./Synopsis";
import SeriesInfo from "./SeriesInfo";
import Episodes from "./Episodes";
import Gallery from "./Gallery";
import { useState } from "react";
import "../App.css"

const Tabs = () => {

const [current, setCurrent] = useState(1)

  const changeTab = (index) => {
    setCurrent(index)
  }
  
  return (

    <div id="parent-div">

      <nav>
{/* need to add routes to each tab, or content section instead? */}
        <div className="tabs-container">
          <div
            className={current === 1 ? "tab active-tab" : "tab"}
          onClick={() => changeTab(1)}
          >Synopsis</div>

          <div
            className={current === 2 ? "tab active-tab" : "tab"}
            onClick={() => changeTab(2)}
          >Series Info</div>

          <div
            className={current === 3 ? "tab active-tab" : "tab"}
            onClick={() => changeTab(3)}
          >Episodes</div>

          <div
            className={current === 4 ? "tab active-tab" : "tab"}
            onClick={() => changeTab(4)}
          >Art Gallery</div>


        </div>

      </nav>

      <div id="content-container">
      <div
        className={current === 1 ? "content active-content" : "content"}
        id="synopsis">
        <div className="content-component" id="synopsis"><Synopsis /></div>
      </div>

      <div
        className={current === 2 ? "content active-content" : "content"}
        id="series-info">
        <div className="content-component" id="series-info"><SeriesInfo /></div>
      </div>

      <div className={current === 3 ? "content active-content" : "content"}
        id="episodes">
        <div className="content-component" id="episodes"><Episodes /></div>
      </div>

      <div className={current === 4 ? "content active-content" : "content"}
        id="art-gallery">
        <div className="content-component" id="gallery"><Gallery /></div>
        </div>
        </div>


    </div>
  );
};

export default Tabs;

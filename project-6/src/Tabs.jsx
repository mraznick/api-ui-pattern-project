import Synopsis from "./Synopsis";
import SeriesInfo from "./SeriesInfo";
import Episodes from "./Episodes";
import Gallery from "./Gallery";
import { useState } from "react";
import "./App.css"

const Tabs = () => {

const [current, setCurrent] = useState(1)

  const changeTab = (index) => {
    setCurrent(index)
  }
  
  return (

    <div id="parent-div">

      <nav>

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

      
      <div className="content active-content" id="synopsis">
        <div><Synopsis /></div>
      </div>

      <div className="content" id="series-info">
        <div><SeriesInfo /></div>
      </div>

      <div className="content" id="episodes">
        <div><Episodes /></div>
      </div>

      <div className="content" id="art-gallery">
        <div><Gallery /></div>
      </div>
    </div>
  );
};

export default Tabs;

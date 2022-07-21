import { useState, useEffect } from "react";
import axios from "axios";

const SeriesInfo = () => {
  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    const apiInfoCall = async () => {
      const data = await axios("https://kitsu.io/api/edge/anime/1");
      setApiContent(data.data.data.attributes);
      console.log(data.data.data.attributes)
    };
    apiInfoCall();
  }, []);

  return (
    <div id="series-info-component">

      <div className="info-content" id="info-content-one">
        {" "}
        <div className="info-header">Series Title:</div>
        {apiContent.length !== 0 ? apiContent.abbreviatedTitles : ""}
      </div>

      <br></br>
      
      <div className="info-content" id="info-content-two">
        {" "}
        <div className="info-header">Japanese Title:</div>
        {apiContent.length !== 0 ? apiContent.titles.ja_jp : ""}
      </div>

      <br></br>
      
      <div className="info-content" id="info-content-three">
        {" "}
        <div className="info-header">Session 1 Air Date: </div>
        {apiContent.length !== 0 ? apiContent.startDate : ""}
      </div>

      <br></br>
      
      <div className="info-content" id="info-content-four">
        {" "}
        <div className="info-header">Number of Episodes: </div>
        {apiContent.length !== 0 ? apiContent.episodeCount : ""}
      </div>

      <br></br>

      <div className="info-content" id="info-content-four">
        {" "}
        <div className="info-header">Episode Length (in minutes): </div>
        {apiContent.length !== 0 ? apiContent.episodeLength : ""}
      </div>

      <br></br>

      <div className="info-content" id="info-content-four">
        {" "}
        <div className="info-header">Series Status: </div>
        {apiContent.length !== 0 ? apiContent.status : ""}
      </div>

      <br></br>

      <div className="info-content" id="info-content-four">
        {" "}
        <div className="info-header">Final Session Air Date: </div>
        {apiContent.length !== 0 ? apiContent.endDate : ""}
      </div>

      <br></br>

      <div className="info-content" id="info-content-four">
        {" "}
        <div className="info-header">Blu-Ray Trailer (Japanese) YouTube ID: </div>
        {apiContent.length !== 0 ? apiContent.youtubeVideoId : ""}
      </div>

    </div>
  );
};

export default SeriesInfo;

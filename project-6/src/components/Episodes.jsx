import { useState, useEffect } from "react";
import axios from "axios";

const Episodes = () => {
  const [apiContent, setApiContent] = useState([]);
  // const [episodes, setEpisodes] = useState("");
  // const [poster, setPoster] = useState("");
  // const [description, setDescription] = useState("");

  useEffect(() => {
    const apiEpCall = async () => {
      const data = await axios(
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
      );
      setApiContent(data.data.data);
    };
    apiEpCall();
  });

  // useEffect(() => {
  //   const apiEpPosterCall = async () => {
  //     const data = await axios(
  //       "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
  //     );
  //     setPoster(data.data.data[2].attributes.posterImage.medium);
  //   };
  //   apiEpPosterCall();
  // });

  // useEffect(() => {
  //   const apiEpSynCall = async () => {
  //     const data = await axios(
  //       "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
  //     );
  //     setDescription(data.data.data[2].attributes.description);
  //   };
  //   apiEpSynCall();
  // });

  return (
    <div id="episodes-component">
      <h1 className="episode-text">Episodes</h1>

      <h3>
        <em className="episode-text" id="episode-header">
          Session:{" "}
          {apiContent.length !== 0
            ? apiContent[2].attributes.canonicalTitle
            : ""}
        </em>
      </h3>

      <div id="episode-poster-container">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[2].attributes.posterImage.medium
              : ""
          }
          id="episode-poster"
        />
      </div>
      <p className="episode-text" id="episode-description">
        {apiContent.length !== 0 ? apiContent[2].attributes.description : ""}
      </p>
    </div>
  );
};

export default Episodes;

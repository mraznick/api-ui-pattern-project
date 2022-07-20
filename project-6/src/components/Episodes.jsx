import { useState, useEffect } from "react";
import axios from "axios";

const Episodes = () => {
  const [episodes, setEpisodes] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const apiEpCall = async () => {
      const data = await axios(
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
      );
      setEpisodes(data.data.data[1].attributes.canonicalTitle);
    };
    apiEpCall();
  });

  useEffect(() => {
    const apiEpPosterCall = async () => {
      const data = await axios(
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
      );
      setPoster(data.data.data[1].attributes.posterImage.medium);
    };
    apiEpPosterCall();
  });

  useEffect(() => {
    const apiEpSynCall = async () => {
      const data = await axios(
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
      );
      setDescription(data.data.data[1].attributes.description);
    };
    apiEpSynCall();
  });

  return (
    <div id="episodes-component">
      <h1>Episodes</h1>
      <h3>Session: {episodes}</h3>
      <div id="episode-poster-container">
        <img src={poster} id="episode-poster" />
      </div>
      <p id="ep-1-description">{description}</p>
    </div>
  );
};

export default Episodes;

//might delete this component and combine into SeriesInfo

import { useState, useEffect } from "react";
import axios from "axios";

const Episodes = () => {
  const [episodes, setEpisodes] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    const apiEpCall = async () => {
      const data = await axios("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes");
      setEpisodes(data.data.data[1].attributes.canonicalTitle)
    };
    apiEpCall();
  });

  useEffect(() => {
    const apiEpPosterCall = async () => {
      const data = await axios("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes");
      setPoster(data.data.data[1].attributes.posterImage.medium)
    };
    apiEpPosterCall();
})

  return (
    <div id="episodes-component">
      <h1>Episodes</h1>
      <h3>Episode 1:<h3>
      </h3>{episodes}</h3>
      <img src={poster} id="episode-poster" />
      <p>Put episode synopsis here, style to place to the right of poster image</p>
    </div>
  )
}

export default Episodes;
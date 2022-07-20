import { useState, useEffect } from "react";
import axios from "axios";

const Synopsis = () => {
  const [synopsis, setSynopsis] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    const apiSynopsisCall = async () => {
      const data = await axios("https://kitsu.io/api/edge/anime/");
      setSynopsis(data.data.data[0].attributes.synopsis);
    };
    apiSynopsisCall();
  });

  useEffect(() => {
    const apiSynPosterCall = async () => {
      const pData = await axios("https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/characters")
      setPoster(pData.data.data[2].attributes.coverImage.original)
    };
    apiSynPosterCall();
  });

  return (
    <div id="synopsis-component">
      <h1 id="synopsis-header">Synopsis</h1>
      <img src={poster} id="synopsis-poster"/>
      <p id="synopsis-paragraph">{synopsis}</p>
    </div>
  );
};

export default Synopsis;

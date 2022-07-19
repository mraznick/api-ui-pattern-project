import { useState, useEffect } from "react";
import axios from "axios";

const Synopsis = () => {
  const [synopsis, setSynopsis] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios("https://kitsu.io/api/edge/anime/");
      setSynopsis(data.data.data[0].attributes.synopsis);
      setPoster(data.data.data[0].attributes.coverImage.small)
    };
    apiCall();
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

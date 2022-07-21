import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    const apiPosterOneCall = async () => {
      const data = await axios(
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
      );
      setApiContent(data.data.data);
      console.count("API");
    };
    apiPosterOneCall();
  }, []);

  return (
    <div id="gallery-component">
      <div className="gallery-posters" id="gallery-poster-one">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[0].attributes.posterImage.medium
              : ""
          }
          id="gallery-poster-one"
        />
      </div>

      <div className="gallery-posters" id="gallery-poster-two">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[3].attributes.posterImage.medium
              : ""
          }
          id="gallery-poster-one"
        />
      </div>

      <div className="gallery-posters" id="gallery-poster-three">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[2].attributes.coverImage.small
              : ""
          }
          id="gallery-poster-one"
        />
      </div>

      <div className="gallery-posters" id="gallery-poster-four">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[0].attributes.coverImage.small
              : ""
          }
          id="gallery-poster-one"
        />
      </div>
    </div>
  );
};

export default Gallery;

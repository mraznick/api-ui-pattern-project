import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    const apiPosterCall = async () => {
      const data = await axios(
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop/episodes"
      );
      setApiContent(data.data.data);
    };
    apiPosterCall();
  }, []);

  return (
    <div id="gallery-component">
      <div className="gallery-top-container">
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
          id="gallery-poster-two"
        />
        </div>

        
      </div>

      <div className="gallery-posters" id="gallery-poster-four">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[0].attributes.coverImage.small
              : ""
          }
          id="gallery-poster-four"
          />
      </div>
      
<div className="gallery-bottom-posters">
      <div className="gallery-posters" id="gallery-poster-three">
        <img
          src={
            apiContent.length !== 0
              ? apiContent[2].attributes.coverImage.small
              : ""
          }
          id="gallery-poster-three"
        />
      </div>


      </div>
    </div>
  );
};

export default Gallery;

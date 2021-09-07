import React, { useState, useEffect } from "react";
//import WelcomeImagesData from "../data/Welcome-Images.json";

const Welcome = () => {
  const [WelcomeImagesData, setWelcomeImagesData] = useState([]);

  const loadWelcomeImagesData = async () => {
    const resp = await fetch(
      "https://37yhk6o9fi.execute-api.eu-west-2.amazonaws.com/Production/galleryimages"
    );
    let jsonData = await resp.json();
    setWelcomeImagesData(jsonData);
  };

  useEffect(() => {
    loadWelcomeImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {WelcomeImagesData.map((item, i) =>
            item.class ? (
              <img
                key={i}
                src={item.src}
                alt={item.alt}
                className={item.class}
              />
            ) : (
              <img key={i} src={item.src} alt={item.alt} />
            )
          )}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;

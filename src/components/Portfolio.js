import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  const loadPortfolioData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://37yhk6o9fi.execute-api.eu-west-2.amazonaws.com/Production/portfolio"
    );
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setPortfolioData(jsonData);
  };

  useEffect(() => {
    // Load the accessibility data from the API Gateway
    loadPortfolioData();
  }, []);

  return (
    <>
      <h2>Portfolio of previous projects</h2>
      <div>
        {portfolioData.map((item) => (
          <>
            <h3>{item.title}</h3>
            <p>{item.description1}</p>
            <p>{item.description2}</p>
            <p>
              <a href={item.href}>{item.linkText}</a>
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default Portfolio;

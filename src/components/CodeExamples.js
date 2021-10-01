import React, { useState, useEffect } from "react";

const CodeExamples = () => {
  const [codeExamplesData, setCodeExamplesData] = useState([]);

  const loadCodeExamplesData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://37yhk6o9fi.execute-api.eu-west-2.amazonaws.com/Production/codeexamples"
    );
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setCodeExamplesData(jsonData);
  };

  useEffect(() => {
    // Load the accessibility data from the API Gateway
    loadCodeExamplesData();
  }, []);

  return (
    <>
      <h2>Code Examples</h2>
      <p>
        A few experiments and exercises I've done with React, Vue.js,
        JavaScript, CSS and Angular.
      </p>
      <div>
        {codeExamplesData.map((example) => (
          <>
            <h3>{example.title}</h3>
            <p>{example.description}</p>
            <p>
              {example.hrefDemo ? (
                <>
                  <a href={example.hrefDemo}>View demo</a> |{" "}
                </>
              ) : (
                ``
              )}
              <a href={example.hrefGithub}>View files on Github</a>
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default CodeExamples;

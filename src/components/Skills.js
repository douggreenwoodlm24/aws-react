import React, { useState, useEffect } from "react";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  const loadSkillsData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://37yhk6o9fi.execute-api.eu-west-2.amazonaws.com/Production/skills"
    );
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setSkillsData(jsonData);
  };

  useEffect(() => {
    // Load the accessibility data from the API Gateway
    loadSkillsData();
  }, []);

  return (
    <>
      <h2>Skills &amp; Knowledge</h2>
      <div>
        {skillsData.map((skill) => (
          <>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </>
  );
};

export default Skills;

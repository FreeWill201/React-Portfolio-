import React from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      title: "Space API-Project",
      link: "https://freewill201.github.io/Space-Repo/",
      github: "https://github.com/FreeWill201/Space-Repo",
    },
    {
      title: "Weather API-Challenge",
      link: "https://freewill201.github.io/Weather-API-/",
      github: "https://github.com/FreeWill201/Weather-API-",
    },
    {
      title: "HTML-Generator",
      github: "https://github.com/FreeWill201/HTML-Generator",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;

import React from "react";

function Project({ title, image, link, github }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={link}>Live Application</a>
      <a href={github}>GitHub Repository</a>
    </div>
  );
}

export default Project;

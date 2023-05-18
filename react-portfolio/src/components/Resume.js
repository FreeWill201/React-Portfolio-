import React from "react";

// Need to link resume
function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="your-resume.pdf">Download my resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        {/* And so on... */}
      </ul>
    </section>
  );
}

export default Resume;

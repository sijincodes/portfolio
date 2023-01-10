import React from "react";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/sijin-mathews/"
        target="_blank"
        rel="noreferrer"
      >
    <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/sijincodes"
        target="_blank"
        rel="noreferrer"
      >
    <img src="../assets/GitHub-Mark.png" className="h-8 rounded-full " alt="github-link" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;

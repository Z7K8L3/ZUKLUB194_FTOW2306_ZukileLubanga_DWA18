import React from "react";

const Footer = () => {
  const emailAddress = "zeusexperiments@gmail.com";

  return (
    <div>
      <footer>
        <p>
          Contact us at:
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
        © 2023 ShowCast. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;

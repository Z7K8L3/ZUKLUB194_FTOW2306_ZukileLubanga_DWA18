import React from "react";

const Footer = () => {
  const emailAddress = "zeusexperiments@gmail.com";

  return (
    <div className="footer">
      <Footer>
        <p>
          Contact us at:
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
        © 2023 ShowCast. All rights reserved.
      </Footer>
    </div>
  );
};

export default Footer;

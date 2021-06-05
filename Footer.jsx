import React from "react";
function Footer() {
  var cuurYear = new Date().getFullYear();
  return (
    <footer>
      <p>Cpoyright @ {cuurYear} </p>
    </footer>
  );
}

export default Footer;

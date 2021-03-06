import React from "react";
import Sidebars from "../components/Sidebars";

function ContactUs() {
  return (
    <Sidebars>
      <h1 className="ui header">Contact Us</h1>
      <p>
        For any communication directed at the entire program, particularly
        information regarding tournaments, please contact us at this email:
      </p>

      <p className="program">
        <a href="mailto: illiniulti@gmail.com">illiniulti@gmail.com</a>
      </p>

      <p>
        For any questions regarding practice or club details, feel free to
        contact any of the current captains:
      </p>

      <p className="captain">
        <a href="mailto: pmd3@illinois.edu">Patrick Driscoll</a>
      </p>
      <p className="captain">
        <a href="mailto: kjzhou2@illinois.edu">Kevin Zhou</a>
      </p>
      <p className="captain">
        <a href="mailto: kostasa2@illinois.edu">Eli Artemakis</a>
      </p>
    </Sidebars>
  );
}

export default ContactUs;

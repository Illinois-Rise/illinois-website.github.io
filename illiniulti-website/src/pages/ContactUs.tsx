import { Box } from "@mui/material";

function ContactUs() {
  return (
    <Box m={1}>
      <h1>Contact Us</h1>
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
        <a href="mailto: pmd3@illinois.edu">
          Patrick Driscoll (pmd3@illinois.edu)
        </a>
      </p>
      <p className="captain">
        <a href="mailto: kjzhou2@illinois.edu">
          Kevin Zhou (kjzhou2@illinois.edu)
        </a>
      </p>
      <p className="captain">
        <a href="mailto: kostasa2@illinois.edu">
          Eli Artemakis (kostasa2@illinois.edu)
        </a>
      </p>
    </Box>
  );
}

export default ContactUs;

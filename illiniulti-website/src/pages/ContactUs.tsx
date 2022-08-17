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
        For support or to report website issues, email the admin at{" "}
        <a href="mailto: eric.c.badger@gmail.com">eric.c.badger@gmail.com</a> or
        the creator at{" "}
        <a href="mailto: kevinzhou721@gmail.com">kevinzhou721@gmail.com</a>
      </p>
    </Box>
  );
}

export default ContactUs;

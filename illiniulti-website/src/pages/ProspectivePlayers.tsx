import {
  Box,
  Typography,
} from "@mui/material";

function ProspectivePlayers() {
  
  return (
    <>
      <Typography variant="h2" align="center">
        Prospective Players
      </Typography>
      <Box m={1}>
        <Typography component="div">
          Illinois Ultimate has had a long history since its inception in the
          early 1990s and now consistently competes with best competition around
          the country. Illinois has qualified for national championships
          frequently behind our dedication, determination, and distinguished
          character on and off the field. Illinois alumni have gone on to play
          for nationals caliber club teams such as
          <Box component="span" sx={{ fontWeight: "bold" }}>
            {" "}
            Chicago Machine, Minneapolis Drag 'n Thrust, Cincinnati Steamboat,
            Atlanta Chain Lightning
          </Box>
          , and{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            San Francisco Blackbird.{" "}
          </Box>
          Alumni have played on professional AUDL teams such as the{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Chicago Union, Minnesota Windchill, Cincinnati Revolution, Los
            Angeles Aviators, Detroit Mechanix{" "}
          </Box>{" "}
          and the{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            San Jose Spiders
          </Box>
          . They have gone on to coach college ultimate at the{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            University of Illinois, the University of Chicago, Northwestern
            University, University of Minnesota
          </Box>
          , and the
          <Box component="span" sx={{ fontWeight: "bold" }}>
            {" "}
            University of Kentucky
          </Box>
          . It's safe to say that once you play ultimate at Illinois you are
          opened up to a world of opportunity through our alumni network, who
          are more than willing to assist you on your journey though ultimate
          during and beyond your college years.
        </Typography>
        <p />
        <Typography paragraph={true}>
          While you are at Illinois you will enjoy a number of experiences. This
          ranges from team socials to study groups and from practices in Irwin
          Fieldhouse to playing games on the shores of San Diego. Your teammates
          won't only be your best friends, they will be family. You will learn
          the various ways ultimate is played, how to expand your throwing
          arsenal, how to improve your athleticism, and how to take your game to
          the next level. A majority of our team didn't play organized ultimate
          before coming to college, and are now some of the best players in the
          Great Lakes region (see our All-Regions honors page).
        </Typography>
        <Typography paragraph={true}>
          We encourage prospective players to fill out our interest form and to
          reach out to the captains especially if you will be on campus. We are
          more than happy to meet up and discuss what Illinois can do for you,
          and to see what you can do to be ready for Illinois once you get on
          campus. Our contact information is below. Thank you for taking the
          time to visit our website, and we hope to hear from you soon.
        </Typography>

       
      </Box>
    </>
  );
}

export default ProspectivePlayers;

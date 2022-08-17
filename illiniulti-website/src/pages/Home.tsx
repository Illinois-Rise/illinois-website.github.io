import { Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import "react-slideshow-image/dist/styles.css";
import ProspectivePlayersForm from "../components/ProspectivePlayerForm";
import { HeaderBackground } from "../images";

//pictures: To update, import the file from the images folder then add it to the images array
import { IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5 } from "../images";

const reactslideshowimage = require("react-slideshow-image");
const { Fade } = reactslideshowimage;

function Home() {
  const images = [IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5];
  return (
    
    <Box
      sx={{
        width: "100%",

        alignItems: "center",
        pt: 2, //padding top
      }}
    >
      <Typography variant="h2" m={2}>Interest Form</Typography>
      <ProspectivePlayersForm/>
      {/* <Fade duration={7500} easing="ease">
        {images.map((image, index) => (
          <Box
            component="img"
            width="inherit"
            src={image}
            alt={"Home Pic " + index}
            key={index}
          ></Box>
        ))}
      </Fade> */}
    </Box>
  );
}

export default Home;

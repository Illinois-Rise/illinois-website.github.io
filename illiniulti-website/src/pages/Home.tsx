import React from "react";
import { Box } from "@mui/system";
import "react-slideshow-image/dist/styles.css";

//pictures: To update, import the file from the images folder then add it to the images array
import { IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5 } from "../images";
import Sidebars from "../components/Sidebars";


const reactslideshowimage = require("react-slideshow-image");
const { Fade } = reactslideshowimage;

const images = [IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5];
function Home() {
  //800 is where it starts to creep into the tweets
  //TODO: Center the donate button and probably put it in a Paper
  return (
    <Sidebars>
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            alignItems: "center",
            pt: 2, //padding top
          }}
        >
          <Fade duration={7500} easing="ease">
            {images.map((image, index) => (
              <Box
                component="img"
                width="inherit"
                src={image}
                alt={"Home Pic " + index}
                key={index}
              ></Box>
            ))}
          </Fade>
        </Box>
    </Sidebars>

  );
}

export default Home;

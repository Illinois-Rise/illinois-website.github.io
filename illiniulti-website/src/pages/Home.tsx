import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "react-slideshow-image/dist/styles.css";
import { To, useNavigate } from "react-router-dom";
//pictures: To update, import the file from the images folder then add it to the images array
import { IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5 } from "../images";

const reactslideshowimage = require("react-slideshow-image");
const { Fade } = reactslideshowimage;

function Home() {
  const images = [IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5];
  const navigate = useNavigate();

  return (
    
    <Box
      sx={{
        width: "100%",

        alignItems: "center",
        pt: 2, //padding top
      }}
    >
       {/* Embed YouTube Video */}
       <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4, // margin-bottom
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tGDV0BsAzWw?si=sHyrZoi2zNSDzJF6" // Replace with your YouTube video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      
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
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h4">Looking to Play?</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={()=> {navigate("/prospective")}}>Click Here!</Button>
        </Grid>
        
      </Grid>
      
    </Box>
  );
}

export default Home;

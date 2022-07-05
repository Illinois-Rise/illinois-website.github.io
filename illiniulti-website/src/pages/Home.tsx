import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Timeline } from "react-twitter-widgets";
import "react-slideshow-image/dist/styles.css";

//pictures: To update, import the file from the images folder then add it to the images array
import { IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5 } from "../images";
import { instagramButton, twitterButton, emailButton, paypalDonate } from "../iconButtons";
import SocialButton from "../components/SocialButton";


const reactslideshowimage = require("react-slideshow-image");
const { Fade } = reactslideshowimage;

const images = [IU_Home1, IU_Home2, IU_Home3, IU_Home4, IU_Home5];
function Home() {
  //800 is where it starts to creep into the tweets
  return (
    <Grid container>
      <Grid item sm={3}>
        <Box sx={{p: 2}}>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'Illinois_Rise',
            }}
            options={{
              height: '400',
              width: '150'
            }}
          />
        </Box>
      </Grid>
      <Grid item sm={6} justifyContent="center">
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
        
      </Grid>
      <Grid item sm={3}>
        <Box p={2} sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"}}>
          <Typography variant="h4" align="center">Help Out Illinois Ultimate!</Typography>

          <Typography variant="body1" align="center">Illinois Ultimate is mostly student-funded, help us out by donating!</Typography>
          <a href="https://www.paypal.me/illiniulti" target="_blank" rel="noreferrer">
            <Box component = "img" src={paypalDonate} alt="paypal donate" width={100}>
            </Box>
          </a>
        </Box>
        <Box alignItems="center">
          <SocialButton image={instagramButton} link="https://www.instagram.com/illinois.rise/"/>
          <SocialButton image={twitterButton} link="https://twitter.com/illinois_rise"/>
          <SocialButton image={emailButton} link="mailto:illiniulti@gmail.com"/>
        </Box>
      </Grid>
    </Grid>

  );
}

export default Home;

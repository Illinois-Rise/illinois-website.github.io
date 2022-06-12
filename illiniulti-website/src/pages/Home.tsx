import { Box } from '@mui/system';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
//pictures: To update, import the file from the images folder then add it to the images array
import IU_Home1 from "../images/IU_Home1.jpg";
import IU_Home2 from "../images/IU_Home2.jpg";
import IU_Home3 from "../images/IU_Home3.jpg";
import IU_Home4 from "../images/IU_Home4.jpg";

const reactslideshowimage = require('react-slideshow-image')
const { Fade } = reactslideshowimage;

const images = [
    IU_Home1,
    IU_Home2,
    IU_Home3,
    IU_Home4,
]
function Home() {
    return (
       <>
       <Box
        sx={{
            width: '100%',
            maxWidth: 800,
        }}>
            <Fade duration={7500} easing="ease">
                {images.map((image, index) =>
                    <Box
                        component="img"
                        width="inherit"
                        src={image}
                        alt={"Home Pic " + index}
                        key={index}>
                    </Box>
                )}
                
            </Fade>
       </Box>
        
       </>
    )
}


export default Home;
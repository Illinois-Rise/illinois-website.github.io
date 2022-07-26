//This is the Grid system that contains the twitter and socials
//Is responsive so disappears if too small
import { Box, Grid, Paper, Typography } from "@mui/material"
import { Timeline } from "react-twitter-widgets"
import { instagramButton, twitterButton, emailButton, paypalDonate } from "../iconButtons";
import SocialButton from "../components/SocialButton";

interface SidebarsProps {
    children?: React.ReactNode
}
function Sidebars({children}: SidebarsProps) {
    //TODO: Make Twitter Timeline responsive by adding mediaqueries
    //TODO: Make the grids disappear if the screen is too small
    return(
    <Grid container>
      <Grid item sm={3} sx={{justifyContent:"center"}}>
        <Box sx={{p: 3}} >
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'Illinois_Rise',
            }}
            options={{
              height: '400',
              width: '100%'
            }}
          />
        </Box>
      </Grid>
      <Grid item sm={6} justifyContent="center">
        {children}   
      </Grid>
      <Grid item sm={3}>
      <Box p={2} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 400}}>
            <Paper>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "space-evenly",
                    alignItems: "center"}}>
                    <Typography m={1} variant="h4" align="center">Help Out Illinois Ultimate!</Typography>

                    <Typography m={1} variant="body1" align="center">Illinois Ultimate is mostly student-funded, help us out by donating!</Typography>
                    <a href="https://www.paypal.me/illiniulti" target="_blank" rel="noreferrer">
                        <Box component="img" src={paypalDonate} alt="paypal donate" width={100}>
                        </Box>
                    </a>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-evenly",
                    alignItems: "center"}}
                    >
                    <SocialButton image={instagramButton} link="https://www.instagram.com/illinois.rise/"/>
                    <SocialButton image={twitterButton} link="https://twitter.com/illinois_rise"/>
                    <SocialButton image={emailButton} link="mailto:illiniulti@gmail.com"/>
                </Box>
            </Paper>
        </Box>
      </Grid>
    </Grid>
    )
}
export default Sidebars

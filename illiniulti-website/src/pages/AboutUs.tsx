import { Typography } from "@mui/material";
import { Box } from "@mui/system";
function AboutUs() {
  return (
    <>
      <Box p={1} m={1}>
        <Typography variant="h4" align="center" mb={1}>
          About Us
        </Typography>
        <Typography variant="body1">
          Illinois Ultimate is one of the premier ultimate programs in the
          Midwest and frequently ranks in the National top 25. We strive to
          contend with the best programs in the country and qualify to compete
          at Nationals regulary. We are a program that prides itself on
          developing players who come to Illinois with no experience playing
          competitive ultimate. We teach all levels of ultimate, from the basics
          of throwing a forehand all the way to throwing bombs in the worst of
          weather.
        </Typography>
      </Box>
      <Box p={1} m={1}>
        <Typography variant="h4" align="center" mb={1}>
          Mission Statement
        </Typography>
        <Typography variant="body1">
          We want to compete at the highest level possible in college ultimate
          while remaining respectful to our opponents. We want to develop all
          our of players to become the best they can be at ultimate, as well as
          players who exemplify the true meaning of sportsmanship, which is
          pivotal to the progress of ultimate frisbee in its current state.
        </Typography>
      </Box>
      <Box p={1} m={1}>
        <Typography variant="h4" align="center" mb={1}>
          Team Structure/Affiliation with University
        </Typography>
        <Typography variant="body1">
          Our team is a Registered Student Organization (RSO) at the University
          of Illinois and we are classified as a club sport. We receive some
          funding from the University that helps pay for our travel costs and
          hotels while we are at tournaments.
        </Typography>
        <Typography variant="body1">
          We are a member of the USAU College Series and compete in a series of
          tournaments that culminate in the College Championships held every
          year during Memorial Day weekend. Most, if not all, state schools have
          established ultimate teams and many smaller schools have teams as
          well. We compete in the Illinois conference which is as you can guess,
          the schools in the state of Illinois. The next largest division is the
          Great Lakes Region, which includes the states of Illinois, Indiana,
          Michigan, and Kentucky. The final step is the aforementioned National
          Championships.
        </Typography>
        <Typography variant="body1">
          Our program is split up into two teams, A and B. Our A team is a group
          of individuals who are very dedicated to the team and who put in a
          large amount of time for practices as well as training outside of
          practices. Our B team is more oriented towards the development of
          younger or inexperienced players. B team provides a much more relaxed
          atmosphere but still remains competitive with all other B teams in the
          region, and even beats some smaller schools' A teams.
        </Typography>
        <Typography variant="body1">
          A team has tryouts each year, consisting of three to four tournaments
          in the fall. The first round of cuts will usually be made after the
          second tournament. The tryout roster will then be narrowed down to one
          team before the final tournament of the fall, via cuts on a rolling
          basis. Players may be moved between the A and B team rosters as
          necessary.
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;

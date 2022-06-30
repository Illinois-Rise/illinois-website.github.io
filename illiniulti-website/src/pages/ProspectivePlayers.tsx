import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormInputText } from "../components/FormInputText";
import FormMessage from "../components/FormMessage";
import { addProspective } from "../api/ProspectivePlayers";

function ProspectivePlayers() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const formOptions = {
    firstname: { required: "First Name is required" },
    lastname: { required: "Last Name is required" },
    email: { required: "Email is required" },
    hometown: { required: "Hometown is required" },
    highschool: { required: "High School is required" },
    major: { required: "Major is required (say Undecided if you don't know)" },
    experience: { required: "Tell us something about your experience!" },
    clubs: { required: "Say No if there are no clubs you plan to join" },
  };
  const onFormSubmit = async (data: any) => {
    data = { timestamp: new Date(), ...data };
    console.log(data);
    setSuccess(true);
    //Cannot access the heroku server atm because of CORS, waiting on Nick
    //TODO: Add timestamp and test whether it actually sends it to the server
    const successfulSubmit = await addProspective(data);
    if (successfulSubmit) {
      //setSuccess(true)
    }
  };

  const onError = (errors: any) => {
    console.log(errors);
  };
  //TODO: Connect with Google Sheets

  return (
    <>
      <Typography variant="h2">Prospective Players</Typography>

      <Typography component="div">
        Illinois Ultimate has had a long history since its inception in the
        early 1990s and now consistently competes with best competition around
        the country. Illinois has qualified for national championships
        frequently behind our dedication, determination, and distinguished
        character on and off the field. Illinois alumni have gone on to play for
        nationals caliber club teams such as  
        <Box component="span" sx={{fontWeight: 'bold'}}> Chicago Machine, Minneapolis Drag
        'n Thrust, Cincinnati Steamboat, Atlanta Chain Lightning</Box>, and <Box component="span" sx={{fontWeight: 'bold'}}>San
        Francisco Blackbird. </Box>Alumni have played on professional AUDL teams such
        as the <Box component="span" sx={{fontWeight: 'bold'}}>Chicago Union, Minnesota Windchill, Cincinnati Revolution, Los Angeles Aviators, Detroit Mechanix </Box> and
        the <Box component="span" sx={{fontWeight: 'bold'}}>San Jose Spiders</Box>. They have gone on to coach college ultimate at the <Box component="span" sx={{fontWeight: 'bold'}}>University
        of Illinois, the University of Chicago, Northwestern University, University of Minnesota</Box>, and the
        <Box component="span" sx={{fontWeight: 'bold'}}> University of Kentucky</Box>. It's safe to say that once you play ultimate at
        Illinois you are opened up to a world of opportunity through our alumni
        network, who are more than willing to assist you on your journey though
        ultimate during and beyond your college years.
      </Typography>
      <p/>
      <Typography paragraph={true}>
        While you are at Illinois you will enjoy a number of experiences. This
        ranges from team socials to study groups and from practices in Irwin
        Fieldhouse to playing games on the shores of San Diego. Your teammates
        won't only be your best friends, they will be family. You will learn the
        various ways ultimate is played, how to expand your throwing arsenal,
        how to improve your athleticism, and how to take your game to the next
        level. A majority of our team didn't play organized ultimate before
        coming to college, and are now some of the best players in the Great
        Lakes region (see our All-Regions honors page).
      </Typography>
      <Typography paragraph={true}>
        We encourage prospective players to fill out our interest form and to
        reach out to the captains especially if you will be on campus. We are
        more than happy to meet up and discuss what Illinois can do for you, and
        to see what you can do to be ready for Illinois once you get on campus.
        Our contact information is below. Thank you for taking the time to visit
        our website, and we hope to hear from you soon.
      </Typography>

      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
      >
        <form onSubmit={handleSubmit(onFormSubmit, onError)}>
          <FormInputText
            name={"firstName"}
            control={control}
            label={"First Name"}
            rules={formOptions.firstname}
          />

          <FormInputText
            name={"lastName"}
            control={control}
            label={"Last Name"}
            rules={formOptions.lastname}
          />

          <FormInputText
            name={"email"}
            control={control}
            label={"Email"}
            rules={formOptions.email}
          />

          <FormInputText
            name={"hometown"}
            control={control}
            label={"Hometown"}
            rules={formOptions.hometown}
          />

          <FormInputText
            name={"highschool"}
            control={control}
            label={"High School Attended"}
            rules={formOptions.highschool}
          />

          <FormInputText
            name={"major"}
            control={control}
            label={"Planned Major"}
            rules={formOptions.major}
          />

          <FormInputText
            name={"experience"}
            control={control}
            label={"Ultimate Frisbee Experience"}
            multiline={true}
            rules={formOptions.experience}
          />

          <FormInputText
            name={"clubs"}
            control={control}
            label={"Are there any other clubs you plan to join?"}
            multiline={true}
            rules={formOptions.clubs}
          />
          <Typography>
            Would you be alright with a captain or coach reaching out to you? *
          </Typography>
          <Controller
            name={"contact"}
            control={control}
            defaultValue={"Yes"}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={onChange}
                row
                defaultValue="Yes"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            )}
          />
          {success ? (
            <FormMessage
              message="Form Successfully Submitted"
              isFailure={false}
            />
          ) : (
            <></>
          )}
          <input type="submit" />
        </form>
      </Box>
    </>
  );
}

export default ProspectivePlayers;

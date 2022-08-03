import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
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
import Sidebars from "../components/Sidebars";

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
    highschool: { required: "Hometown is required" },
    major: { required: "Major is required (say Undecided if you don't know)" },
    experience: { required: "Tell us something about your experience!" },
    clubs: { required: "Say No if there are no clubs you plan to join" },
  };
  const onFormSubmit = async (data: any) => {
    setSuccess(false)
    const date = new Date()
    data = { Timestamp: date.toDateString() + " " +date.toLocaleTimeString(), ...data };
    console.log(JSON.stringify(data));
    const jsonData = JSON.stringify(data);

    const successfulSubmit = await addProspective(jsonData);
    if (successfulSubmit) {
      setSuccess(true);
    }
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
      <>
          <Typography variant="h2" align="center">
            Prospective Players
          </Typography>
          <Box m={1}>
            <Typography component="div">
              Illinois Ultimate has had a long history since its inception in
              the early 1990s and now consistently competes with best
              competition around the country. Illinois has qualified for
              national championships frequently behind our dedication,
              determination, and distinguished character on and off the field.
              Illinois alumni have gone on to play for nationals caliber club
              teams such as
              <Box component="span" sx={{ fontWeight: "bold" }}>
                {" "}
                Chicago Machine, Minneapolis Drag 'n Thrust, Cincinnati
                Steamboat, Atlanta Chain Lightning
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
              opened up to a world of opportunity through our alumni network,
              who are more than willing to assist you on your journey though
              ultimate during and beyond your college years.
            </Typography>
            <p />
            <Typography paragraph={true}>
              While you are at Illinois you will enjoy a number of experiences.
              This ranges from team socials to study groups and from practices
              in Irwin Fieldhouse to playing games on the shores of San Diego.
              Your teammates won't only be your best friends, they will be
              family. You will learn the various ways ultimate is played, how to
              expand your throwing arsenal, how to improve your athleticism, and
              how to take your game to the next level. A majority of our team
              didn't play organized ultimate before coming to college, and are
              now some of the best players in the Great Lakes region (see our
              All-Regions honors page).
            </Typography>
            <Typography paragraph={true}>
              We encourage prospective players to fill out our interest form and
              to reach out to the captains especially if you will be on campus.
              We are more than happy to meet up and discuss what Illinois can do
              for you, and to see what you can do to be ready for Illinois once
              you get on campus. Our contact information is below. Thank you for
              taking the time to visit our website, and we hope to hear from you
              soon.
            </Typography>

            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
            >
              <form onSubmit={handleSubmit(onFormSubmit, onError)}>
                <FormInputText
                  name={"First Name"}
                  control={control}
                  label={"First Name"}
                  rules={formOptions.firstname}
                />

                <FormInputText
                  name={"Last Name"}
                  control={control}
                  label={"Last Name"}
                  rules={formOptions.lastname}
                />

                <FormInputText
                  name={"Email Address"}
                  control={control}
                  label={"Email"}
                  rules={formOptions.email}
                />

                <FormInputText
                  name={"Hometown"}
                  control={control}
                  label={"Hometown"}
                  rules={formOptions.hometown}
                />

                <FormInputText
                  name={"High School"}
                  control={control}
                  label={"High School Attended"}
                  rules={formOptions.highschool}
                />

                <FormInputText
                  name={"Major"}
                  control={control}
                  label={"Planned Major"}
                  rules={formOptions.major}
                />

                <FormInputText
                  name={"Experience"}
                  control={control}
                  label={"Ultimate Frisbee Experience"}
                  multiline={true}
                  rules={formOptions.experience}
                />

                <FormInputText
                  name={"Other Clubs"}
                  control={control}
                  label={"Are there any other clubs you plan to join?"}
                  multiline={true}
                  rules={formOptions.clubs}
                />
                <Typography>
                  Would you be alright with a captain or coach reaching out to
                  you? *
                </Typography>
                <Controller
                  name={"Contact Me"}
                  control={control}
                  defaultValue={"Yes"}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      value={value}
                      onChange={onChange}
                      row
                      defaultValue="Yes"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
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
          </Box>
      </>
  );
}

export default ProspectivePlayers;

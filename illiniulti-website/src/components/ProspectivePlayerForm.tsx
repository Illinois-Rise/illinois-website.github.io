import {
    Box,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { Controller, useForm } from "react-hook-form";
  import { FormInputText } from "../components/FormInputText";
  import FormMessage from "../components/FormMessage";
  import { addProspective } from "../api/ProspectivePlayers";
  
function ProspectivePlayersForm() {
    const [loading, setLoading] = useState(false);
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
        highschool: { required: false },
        major: { required: "Major is required (say Undecided if you don't know)" },
        experience: { required: "Tell us something about your experience!" },
        clubs: { required: "Say No if there are no clubs you plan to join" },
    };
    const onFormSubmit = async (data: any) => {
        setSuccess(false);
        setLoading(true);
        const date = new Date();
        data = {
        Timestamp: date.toDateString() + " " + date.toLocaleTimeString(),
        ...data,
        };
        console.log(JSON.stringify(data));
        const jsonData = JSON.stringify(data);

        const successfulSubmit = await addProspective(jsonData);
        if (successfulSubmit) {
        setSuccess(true);
        setLoading(false);
        }
    };

    const onError = (errors: any) => {
        console.log(errors);
    };

    return (
        <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
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
            defaultValue={" "}
          />

          <FormInputText
            name={"High School"}
            control={control}
            label={"High School Attended"}
            defaultValue={" "}
          />

          <FormInputText
            name={"Major"}
            control={control}
            label={"Planned Major"}
            defaultValue={" "}
          />

          <FormInputText
            name={"Experience"}
            control={control}
            label={"Ultimate Frisbee Experience"}
            multiline={true}
            defaultValue={" "}
          />

          <FormInputText
            name={"Other Clubs"}
            control={control}
            label={"Are there any other clubs you plan to join?"}
            multiline={true}
          />
          <Typography>
            Would you be alright with a captain or coach reaching out to you?
            *
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
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            )}
          />
          {loading && (
            <FormMessage message="Sending..." isFailure={false}></FormMessage>
          )}
          {success ? (
            <FormMessage
              message="Form Successfully Submitted"
              isFailure={false}
            />
          ) : (
            <></>
          )}
          <Button type="submit" variant="outlined">
            Submit Form
          </Button>
        </form>
      </Box>
    )
}

export default ProspectivePlayersForm
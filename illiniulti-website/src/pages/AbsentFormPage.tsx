import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FormInputText } from "../components/FormInputText";
import { useForm } from "react-hook-form";
import FormMessage from "../components/FormMessage";
import { addAbsent } from "../api/AbsentForm";

function AbsentFormPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const formOptions = {
    firstname: { required: "Firstname is Required" },
    lastname: { required: true },
    reason: { required: true },
    time: { required: true },
    date: { required: true },
  };

  const onFormSubmit = async (data: any) => {
    data = { timestamp: new Date(), ...data };
    console.log(data);
    setSuccess(true);
    //Cannot access the heroku server atm because of CORS, waiting on Nick
    //TODO: Add timestamp and test whether it actually sends it to the server
    const successfulSubmit = await addAbsent(data);
    if (successfulSubmit) {
      setSuccess(true);
    }
  };
  const onError = (errors: any) => {
    setError(true);
    console.log(errors);
  };
  return (
    <Grid
      container
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80%" },
      }}
    >
      <Grid item sm={2} />
      <Grid item sm={8} justifyContent="center" alignItems="center'">
        <Typography variant="h2">Practice Absence Form</Typography>
        <form onSubmit={handleSubmit(onFormSubmit, onError)}>
          <FormInputText
            name={"firstname"}
            control={control}
            label={"First Name"}
            rules={formOptions.firstname}
          />

          <FormInputText
            name={"lastname"}
            control={control}
            label={"Last Name"}
            rules={formOptions.lastname}
          />

          <FormInputText
            name={"reason"}
            control={control}
            label={"Reason for missing or being late to Practice"}
            rules={formOptions.reason}
          />

          <FormInputText
            name={"time"}
            control={control}
            label={"From what time to what time is your conflict?"}
            rules={formOptions.time}
          />

          <FormInputText
            name={"date"}
            control={control}
            label={"Practice Date"}
            rules={formOptions.date}
          />
          <input type="submit"></input>
          {success && (
            <FormMessage
              message="Form Sent. Stop Missing Practice."
              isFailure={false}
            ></FormMessage>
          )}
        </form>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
}

export default AbsentFormPage;

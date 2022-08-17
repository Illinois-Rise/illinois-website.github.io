import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { FormInputText } from "../components/FormInputText";
import { useForm } from "react-hook-form";
import FormMessage from "../components/FormMessage";
import { addAbsent } from "../api/AbsentForm";

function AbsentFormPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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
    setSuccess(false);
    setLoading(true);
    const date = new Date();
    data = {
      Timestamp: date.toDateString() + " " + date.toLocaleTimeString(),
      ...data,
    };
    const jsonData = JSON.stringify(data);
    const successfulSubmit = await addAbsent(jsonData);
    if (successfulSubmit) {
      setLoading(false);
      setSuccess(true);
    }
  };
  const onError = (errors: any) => {
    setError(true);
    setErrorMsg(errors);
  };
  return (
    <>
      <Typography align="center" variant="h2" mb={1}>
        Practice Absence Form
      </Typography>
      <Box
        display="flex"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "95%" },
          alignItems: "center",
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
            name={"Reason"}
            control={control}
            label={"Reason for missing or being late to Practice"}
            rules={formOptions.reason}
          />

          <FormInputText
            name={"Time"}
            control={control}
            label={"From what time to what time is your conflict?"}
            rules={formOptions.time}
          />

          <FormInputText
            name={"Date"}
            control={control}
            label={"Practice Date"}
            rules={formOptions.date}
          />
          <Box m={1}>
            <Button type="submit" variant="outlined">
              Submit Form
            </Button>
            {loading && (
              <FormMessage message="Sending..." isFailure={false}></FormMessage>
            )}
            {success && (
              <FormMessage
                message="Form Sent. Stop Missing Practice."
                isFailure={false}
              ></FormMessage>
            )}
            {error && (
              <FormMessage
                message={"error: contact admin " + errorMsg}
                isFailure={true}
              ></FormMessage>
            )}
          </Box>
        </form>
      </Box>
    </>
  );
}

export default AbsentFormPage;

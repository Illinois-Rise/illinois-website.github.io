import * as React from "react";
// import './Header.css';
// TODO: make background light green or light red depending on isFailure
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface FormMessageProps {
  message: string;
  isFailure: boolean;
}
function FormMessage({ message, isFailure }: FormMessageProps) {
  return (
    <Grid container spacing={0} direction="column" justifyContent="center">
      <Grid item xs={4}>
        <Card
          sx={{
            maxWidth: 500,
            maxHeight: 50,
            p: -1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography
              sx={
                isFailure ? { color: "error.main" } : { color: "success.main" }
              }
            >
              {message}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FormMessage;

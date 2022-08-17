import { Card, CardContent, Grid, Typography } from "@mui/material";

interface FormMessageProps {
  message: string;
  isFailure: boolean;
}
function FormMessage({ message, isFailure }: FormMessageProps) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        maxHeight: 50,
        mt: 1,
        mb: 1,
        p: -1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isFailure ? "error.light" : "success.light",
      }}
    >
      <CardContent>
        <Typography
          sx={isFailure ? { color: "error.main" } : { color: "success.dark" }}
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FormMessage;

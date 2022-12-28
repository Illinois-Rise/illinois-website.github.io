import axios from "axios";

export const BASE_SHEETS_URL =
  "https://us-central1-illinois-rise-sheet-api.cloudfunctions.net/app/sheets/1_Nc5uPSzzIg4Z6wzGXjTk0rWjYIFVq7fUwqJ6svtY-0/sheetIndex";

export default axios.create({
  baseURL: BASE_SHEETS_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

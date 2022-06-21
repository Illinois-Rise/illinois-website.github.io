import axios from "axios";

export const BASE_SHEETS_URL =
  "https://nick-proz-node-server.herokuapp.com/sheets/11ijrHoysiIwsFfEggbSNM9Y8VvzU65jeuhQ3vkV5FGw/sheetIndex/";

export default axios.create({
  baseURL: BASE_SHEETS_URL,
  headers: { "Content-Type": "JSON" },
});

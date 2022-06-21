import Client from "./Client";

export const PROSPECTIVEPLAYERS_ENDPOINT = "/1/rows/";

export async function addProspective(data: Object) {
  return await Client.post(PROSPECTIVEPLAYERS_ENDPOINT, data)
    .then((res) => {
      return true;
    })
    .catch((e) => {
      return false;
    });
}
